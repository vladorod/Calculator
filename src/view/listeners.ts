import { ETabValue, PositionName } from "../store/interfaces.ts";
import { store } from "../store/store.ts";

export const initListeners = () => {

    //выпадение меню
    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    pluses.forEach(event => {
        event.addEventListener('click', event => {
            const menu = event.target?.dataset.menu as PositionName;
            const { closeAll, open } = store.getState();
            const _store = store.getState();
            closeAll();
            open(menu, !_store[menu].isMenuOpen);
        })
    });

    //закрытие меню, при клике вне него
    document.addEventListener('click', event => {
        const target = event.target;
        const openMenu = Array.from(document.querySelectorAll('.menu_wrapper')).find((value) => {
            if (value === target.parentElement.parentElement) {
                return true;
            }
        });
        const plusImg = Array.from(document.querySelectorAll('.plus_image')).find((value) => {
            if (value === target) {
                return true;
            }
        });
        if (!plusImg && !openMenu) {
            const { closeAll } = store.getState();
            closeAll();
        };
    });

    //выбор опций в меню
    const radios = Array.from(document.querySelectorAll('.dropdown_menu'))
    radios.forEach(radio => {
        radio.addEventListener('click', () => {
            const menuId = radio.id;
            const checked = document.querySelector(`input[name="${menuId}"]:checked`);
            if (checked) {
                const chekedId = checked.id;
                const text = document.querySelector(`label[for="${chekedId}"]`).innerText;
                const value = Number(document.querySelector(`input[id="${chekedId}"]`).value);
                const element = menuId.replace('radio_menu_', '') as PositionName;
                const { valuePrice } = store.getState();
                valuePrice(element, text, value);
            };
        });
    });

    //выбор опций в переключателе
    const builds = Array.from(document.querySelectorAll('.calc_form_radio_btn'))
    builds.forEach(build => {
        build.addEventListener('click', () => {
            const checked = document.querySelector('input[name="radio_btn"]:checked')
            if (checked) {
                const { buildPrice } = store.getState();
                const menuId = checked.id as unknown as ETabValue;
                const value = Number(document.querySelector(`input[id="${menuId}"]`).value)
                buildPrice(value);
                // buildings.currentPrice = value;
            };
        });
    });
}

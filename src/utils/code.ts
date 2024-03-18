import create from "zustand";

const store = create(set => ({
    roof: { isMenuOpen: false, currentValue: null },
    square: { isMenuOpen: false, currentValue: null },
    sceleton: { isMenuOpen: false, currentValue: null },
    foundation: { isMenuOpen: false, currentValue: null },
    log: { isMenuOpen: false, currentValue: null },
    openRoof: (value: boolean, radio: string) => {
        set(state => ({ roof: { ...state.roof, isMenuOpen: value, currentValue: radio } }))
    }
}))
store.subscribe((state) => {
    console.log(state);
}, (state) => state.roof)


document.addEventListener('DOMContentLoaded', () => {

    const optionsValue = {
        roof: 0,
        square: 0,
        sceleton: 0,
        foundation: 0,
        log: 0,
        builds: Number(document.querySelector('input[id="house"]').value)
    }

    const builds = Array.from(document.querySelectorAll('.calc_form_radio_btn'))
    builds.forEach(build => {
        build.addEventListener('click', event => {
            if (event) {
                const checked = document.querySelector('input[name="radio_btn"]:checked')
                if (checked) {
                    const menuId = checked.id
                    const value = Number(document.querySelector(`input[id="${menuId}"]`).value)
                    optionsValue.builds = value;
                }
            }
            let summ = 0;
            for (let price of Object.values(optionsValue)) {
                summ += price;
            }
            document.getElementById('summ').textContent = 'от: ' + summ + ' ₽';
        })
    })
    let summ = 0;
    for (let price of Object.values(optionsValue)) {
        summ += price;
    }
    document.getElementById('summ').textContent = 'от: ' + summ + ' ₽';

    const radios = Array.from(document.querySelectorAll('.dropdown_menu'))
    radios.forEach(radio => {
        radio.addEventListener('click', event => {
            if (event) {
                const menuId = radio.id;
                const checked = document.querySelector(`input[name="${menuId}"]:checked`);
                if (checked) {
                    const chekedId = checked.id;
                    const text = document.querySelector(`label[for="${chekedId}"]`).innerText;
                    const value = Number(document.querySelector(`input[id="${chekedId}"]`).value);
                    const element = menuId.replace('radio_menu_', '');
                    console.log(element);
                    const result = document.getElementById(`${element}_result`);
                    const picture = document.querySelector(`.plus_image_${element}`);
                    optionsValue[element] = value;
                    if (result) {
                        result.textContent = ' ' + text;
                        picture.style.backgroundImage = "url('./public/img/crl+.svg')";
                    }
                }
                let summ = 0;
                for (let price of Object.values(optionsValue)) {
                    summ += price;
                }
                document.getElementById('summ').textContent = 'от: ' + summ + ' ₽';
            }
        })
    })

    //Код для выпадающего меню
    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    pluses.forEach(e => {
        e.addEventListener('click', e => {
            const openRoof = store.getState().openRoof
            openRoof(false);
            if (e) {
                const menu = e.target.dataset.menu;
                document.querySelectorAll('.dropdown_menu').forEach(e => {
                    const menu_element = document.querySelector(`[data-target=${menu}]`);
                    const button_element = document.querySelector(`[data-menu=${menu}]`);
                    const isMenuOpen = menu_element.classList.contains('menu_active');
                    if (!isMenuOpen) {
                        menu_element.classList.add('menu_active');
                    }
                    else {
                        menu_element.classList.remove('menu_active');
                    }
                    window.onclick = e => {
                        if ((e.target != menu_element) && (e.target != button_element)) {
                            menu_element.classList.remove('menu_active');
                        }
                    }
                })
            }
        })
    })
})
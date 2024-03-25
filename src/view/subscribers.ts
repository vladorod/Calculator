import { store } from "../store/store.ts";

export const initSubscribers = () => {

    const keys = Object.keys(store.getState())
    //реакция для открытия меню
    keys.forEach(element => {
        store.subscribe((state) => state[element].isMenuOpen, (isMenuOpen) => {
            const menu_element = document.querySelector(`[data-target="${element}"]`);
            if (isMenuOpen) {
                menu_element?.classList.add('menu_active');
            } else {
                menu_element?.classList.remove('menu_active');
            }
        })
    });

    //реакция для передачи текста опции и изменения плюса на галочку
    keys.forEach(element => {
        store.subscribe((state) => state[element].currentValue, (currentValue) => {
            const result_element = document.getElementById(`${element}_result`);
            const sheet_element = document.getElementById(`sheet_string_${element}`);
            const image_element = document.querySelector(`.plus_image_${element}`);
            result_element.textContent = ' ' + currentValue;
            sheet_element.style.display = 'flex';
            image_element.style.backgroundImage = "url('./public/img/crl+.svg')";
        })
    });

    //реакция на изменение цены
    keys.forEach(element => {
        store.subscribe((state) => state[element].currentPrice, () => {
            let summ = 0;
            const _store = store.getState();
            if (_store.roof.currentPrice && _store.square.currentPrice && _store.sceleton.currentPrice && _store.foundation.currentPrice && _store.log.currentPrice) {
                summ = _store.roof.currentPrice + _store.square.currentPrice + _store.sceleton.currentPrice + _store.foundation.currentPrice + _store.log.currentPrice + _store.buildings.currentPrice;
                const result_element = document.getElementById('summ');
                result_element.textContent = 'от: ' + summ + ' ₽';
                const button_element = document.querySelector('.send_button');
                button_element.removeAttribute("disabled");
            }
        })
    });
}

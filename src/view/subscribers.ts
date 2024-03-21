import { store } from "../store/store.ts";

export const initSubscribers = () => {

    store.subscribe(state => {
        // То есть при изменении currentValue у нас будет срабатывать слушатель который передается следующим элементов в метод subscribe
        return state.roof.currentValue;
    }, (currentValue) => {

        // Этот колбек срабатывает только при изменении currentValue
        // написал в аргументах currentValue чтобы был понятно а так может быть написано что угодно

        // Cюда придет только currentValue
        // если бы мы указали выше return state.roof;
        // то во первых мы бы когда изменяли что-нибудь в roof у нас бы срабатывал этот колбек
        // Во вторых мы бы получали сюда весь roof а не только currentValue

        console.log(currentValue)
    })

    //реакция для открытия меню
    Object.keys(store.getState()).forEach(element => {
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
    Object.keys(store.getState()).forEach(element => {
        store.subscribe((state) => state[element].currentValue, (currentValue) => {
            const result_element = document.getElementById(`${element}_result`);
            const image_element = document.querySelector(`.plus_image_${element}`);
            result_element.textContent = ' ' + currentValue;
            image_element.style.backgroundImage = "url('./public/img/crl+.svg')";
        })
    });

    //реакция на изменение цены
    let summ = 0;
    Object.keys(store.getState()).forEach(element => {
        store.subscribe((state) => state[element].currentPrice, (currentPrice) => {
            summ += currentPrice;
            const result_element = document.getElementById('summ');
            result_element.textContent = 'от: ' + summ + ' ₽';
        })
    });

    //     store.subscribe((state) => state.roof.isMenuOpen, (isMenuOpen) => {
    //         const menu_element = document.querySelector(`[data-target="roof"]`);
    //         if (isMenuOpen) {
    //             menu_element?.classList.add('menu_active');
    //         } else {
    //             menu_element?.classList.remove('menu_active');
    //         }
    //     })

    //     store.subscribe((state) => state.square.isMenuOpen, (isMenuOpen) => {
    //         const menu_element = document.querySelector('[data-target="square"]');
    //         if (isMenuOpen) {
    //             menu_element?.classList.add('menu_active');
    //         } else {
    //             menu_element?.classList.remove('menu_active');
    //         }
    //     })
    //     store.subscribe((state) => state.sceleton.isMenuOpen, (isMenuOpen) => {
    //         const menu_element = document.querySelector(`[data-target="sceleton"]`);
    //         if (isMenuOpen) {
    //             menu_element?.classList.add('menu_active');
    //         } else {
    //             menu_element?.classList.remove('menu_active');
    //         }
    //     })

    //     store.subscribe((state) => state.foundation.isMenuOpen, (isMenuOpen) => {
    //         const menu_element = document.querySelector('[data-target="foundation"]');
    //         if (isMenuOpen) {
    //             menu_element?.classList.add('menu_active');
    //         } else {
    //             menu_element?.classList.remove('menu_active');
    //         }
    //     })
    //     store.subscribe((state) => state.log.isMenuOpen, (isMenuOpen) => {
    //         const menu_element = document.querySelector(`[data-target="log"]`);
    //         if (isMenuOpen) {
    //             menu_element?.classList.add('menu_active');
    //         } else {
    //             menu_element?.classList.remove('menu_active');
    //         }
    //     })
}

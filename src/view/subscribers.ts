import { store } from "../store/store.ts";
import shallow from 'zustand/shallow'

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

    const states = store(state => Object.keys(state.states), shallow);
    console.log('states = ', states);
    store.subscribe((state) => state.roof.isMenuOpen, (isMenuOpen) => {
        const menu_element = document.querySelector(`[data-target="roof"]`);
        if (isMenuOpen) {
            menu_element?.classList.add('menu_active');
        } else {
            menu_element?.classList.remove('menu_active');
        }
    })
}

import { store } from "../store/store.ts";

export const initListeners = () => {

    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    console.log(pluses);
    pluses.forEach(event => {
        event.addEventListener('click', event => {
            const menu = event.target.dataset.menu;
            const { open, isOpen } = store.getState();
            console.log(isOpen);
            open(menu, !isOpen.isMenuOpen);
        })
    });
}

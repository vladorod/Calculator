import { store } from "../store/store.ts";

export const initListeners = () => {

    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    pluses.forEach(event => {
        event.addEventListener('click', event => {
            const menu = event.target.dataset.menu;
            const { open, isOpen = menu } = store.getState();
            open(menu, !isOpen.isMenuOpen);
            console.log(!isOpen.isMenuOpen);
        })
    });
}

import { store } from "../store/store.ts";

export const initListeners = () => {

    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    console.log(pluses);
    pluses.forEach(event => {
        event.addEventListener('click', event => {
            const menu = event.target.dataset.menu;
            const { open, menuEl } = store.getState();
            open(menu, !menuEl.isMenuOpen);
        })
    });

    const square = document.querySelector('.plus_image_square')
    console.log(square);
    square?.addEventListener('click', () => {
        const { open, square } = store.getState();
        open('square', !square.isMenuOpen);
    });
}

import { store } from "../store/store.ts";

export const initListeners = () => {
    // Тут собственно то что ты делал раньше

    const roof = document.querySelector('.plus_image_roof')
    roof?.addEventListener('click', () => {
        const { open, roof } = store.getState();
        open('roof', !roof.isMenuOpen);
    });

    const square = document.querySelector('plus_image_sqare')
    square?.addEventListener('click', () => {
        const { open, square } = store.getState();
        open('square', !square.isMenuOpen);
    });
}
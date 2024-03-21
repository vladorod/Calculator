import { PositionName } from "../store/interfaces.ts";
import { store } from "../store/store.ts";

export const initListeners = () => {

    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    pluses.forEach(event => {
        event.addEventListener('click', event => {
            const menu = event.target?.dataset.menu as PositionName;
            const _store = store.getState();
            const { open } = store.getState();
            open(menu, !_store[menu].isMenuOpen);
        })
    });
}

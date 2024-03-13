import create from "zustand";

const store = create(set => ({
    roof: { isMenuOpen: false, currentValue: null },
    // square:'',
    // sceleton:'',
    openRoof: (value: boolean) => {
        set(state => ({ roof: { ...state.roof, isMenuOpen: value, currentValue: 'Hi!' } }))
    }
}))
store.subscribe((state) => {
    console.log(state);
}, (state) => state.roof)

document.addEventListener('DOMContentLoaded', () => {
    const data = document.querySelector('input[name="radio_menu_sqare"]:checked')
    console.log(data)


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
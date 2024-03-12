document.addEventListener('DOMContentLoaded', () => {
    const pluses = Array.from(document.querySelectorAll('.plus_image'))
    console.log(pluses);
    pluses.forEach(e => {
        e.addEventListener('click', e => {
            if (e) {
                const menu = e.target.dataset.menu;
                console.log(menu);
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
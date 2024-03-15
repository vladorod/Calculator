import create from "zustand";

const store = create(set => ({
    roof: { isMenuOpen: false, currentValue: null },
    square: { isMenuOpen: false, currentValue: null },
    sceleton: { isMenuOpen: false, currentValue: null },
    foundation: { isMenuOpen: false, currentValue: null },
    log: { isMenuOpen: false, currentValue: null },
    openRoof: (value: boolean, radio: string) => {
        set(state => ({ roof: { ...state.roof, isMenuOpen: value, currentValue: radio } }))
    }
}))
store.subscribe((state) => {
    console.log(state);
}, (state) => state.roof)


document.addEventListener('DOMContentLoaded', () => {

    const radios = Array.from(document.querySelectorAll('.dropdown_menu'))
    let valueArr = new Array(6);
    valueArr[5] = 2;
    radios.forEach(radio => {
        radio.addEventListener('click', e => {
            if (e) {
                if (document.querySelector('input[name="radio_menu_sqare"]:checked')) {
                    const data = document.querySelector('input[name="radio_menu_sqare"]:checked').id
                    const text = document.querySelector(`label[for="${data}"]`).innerText
                    const value = Number(document.querySelector(`input[id="${data}"]`).value)
                    const element = document.getElementById('sqare_result');
                    const picture = document.querySelector('.plus_image_square');
                    valueArr[0] = value;
                    if (element) {
                        element.textContent = text;
                        picture.style.backgroundImage = "url('./public/img/crl+.svg')";
                    } else {
                        console.error('Element with id "sqare_result" not found');
                    }
                }
            }
            if (e) {
                if (document.querySelector('input[name="radio_menu_roof"]:checked')) {
                    const data = document.querySelector('input[name="radio_menu_roof"]:checked').id
                    const text = document.querySelector(`label[for="${data}"]`).innerText
                    const value = Number(document.querySelector(`input[id="${data}"]`).value)
                    const element = document.getElementById('roof_result');
                    const picture = document.querySelector('.plus_image_roof');
                    valueArr[1] = value;
                    if (element) {
                        element.textContent = text;
                        picture.style.backgroundImage = "url('./public/img/crl+.svg')";
                    } else {
                        console.error('Element with id "roof_result" not found');
                    }
                }
            }
            if (e) {
                if (document.querySelector('input[name="radio_menu_sceleton"]:checked')) {
                    const data = document.querySelector('input[name="radio_menu_sceleton"]:checked').id
                    const text = document.querySelector(`label[for="${data}"]`).innerText
                    const value = Number(document.querySelector(`input[id="${data}"]`).value)
                    const element = document.getElementById('sceleton_result');
                    const picture = document.querySelector('.plus_image_sceleton');
                    valueArr[2] = value;
                    if (element) {
                        element.textContent = text;
                        picture.style.backgroundImage = "url('./public/img/crl+.svg')";
                    } else {
                        console.error('Element with id "sceleton_result" not found');
                    }
                }
            }
            if (e) {
                if (document.querySelector('input[name="radio_menu_foundation"]:checked')) {
                    const data = document.querySelector('input[name="radio_menu_foundation"]:checked').id
                    const text = document.querySelector(`label[for="${data}"]`).innerText
                    const value = Number(document.querySelector(`input[id="${data}"]`).value)
                    const element = document.getElementById('foundation_result');
                    const picture = document.querySelector('.plus_image_foundation');
                    valueArr[3] = value;
                    if (element) {
                        element.textContent = text;
                        picture.style.backgroundImage = "url('./public/img/crl+.svg')";
                    } else {
                        console.error('Element with id "foundation_result" not found');
                    }
                }
            }
            if (e) {
                if (document.querySelector('input[name="radio_menu_log"]:checked')) {
                    const data = document.querySelector('input[name="radio_menu_log"]:checked').id
                    const text = document.querySelector(`label[for="${data}"]`).innerText
                    const value = Number(document.querySelector(`input[id="${data}"]`).value)
                    const element = document.getElementById('log_result');
                    const picture = document.querySelector('.plus_image_log');
                    valueArr[4] = value;
                    if (element) {
                        element.textContent = text;
                        picture.style.backgroundImage = "url('./public/img/crl+.svg')";
                    } else {
                        console.error('Element with id "log_result" not found');
                    }
                }
            }
            let summ = 0;
            valueArr.map((item) => summ += item);
            console.log(summ);
            document.getElementById('summ').textContent = 'от: ' + summ + ' ₽';
        })
    })

    const builds = Array.from(document.querySelectorAll('.calc_form_radio_btn'))
    builds.forEach(build => {
        build.addEventListener('click', e => {
            if (e) {
                if (document.querySelector('input[name="radio_btn"]:checked')) {
                    const data = document.querySelector('input[name="radio_btn"]:checked').id
                    const value = Number(document.querySelector(`input[id="${data}"]`).value)
                    valueArr[5] = value;
                }
            }
            let summ = 0;
            valueArr.map((item) => summ += item);
            console.log(summ);
            document.getElementById('summ').textContent = 'от: ' + summ + ' ₽';
        })
    })
    let summ = 0;
    valueArr.map((item) => summ += item);
    console.log(summ);
    document.getElementById('summ').textContent = 'от: ' + summ + ' ₽';

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
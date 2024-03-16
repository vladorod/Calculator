import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";
import {PositionElement, PositionName, Store} from "./interfaces.ts";

// subscribeWithSelector нужно чтобы можно было подписываться на конкретные элементы из store например (смотреть файл subscribers)


export const store = create(subscribeWithSelector<Store & Record<PositionName, PositionElement>>(set => ({
    roof: { isMenuOpen: false, currentValue: null },
    square: { isMenuOpen: false, currentValue: null },
    sceleton: { isMenuOpen: false, currentValue: null },
    foundation: { isMenuOpen: false, currentValue: null },
    log: { isMenuOpen: false, currentValue: null },

    open: (element , value) => {
        // Метод сэт отвечат за изменение стора
        set(state => {
            // Достоем ссылку на элемент который передан нам строкой
            const currentElement = state[element];
            // Меняем ему значение
            currentElement.isMenuOpen = value;


            // Тут сделал так, чтобы обновлялась ссылка на объект
            return {...state}

            //Если сделать так-то ссылка не обновится
            // return state;

            // Можно еще так
            // return Object.create(state)
        })

        // так же можно добавить объект по типу
        // currentElement: ( и сюда уже пихать roof | sceleton | log .. )
        // и метод pickElement: (element: PositionElement) => {
        // set(state => ({...state, currentElement: element})
        //}
        // крч можно очень по разному делать
    }
})))




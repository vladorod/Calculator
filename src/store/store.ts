import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PositionElement, PositionName, Store } from "./interfaces.ts";

export const store = create(subscribeWithSelector<Store & Record<PositionName, PositionElement>>(set => ({
    roof: { isMenuOpen: false, currentValue: '', currentPrice: null },
    square: { isMenuOpen: false, currentValue: '', currentPrice: null },
    sceleton: { isMenuOpen: false, currentValue: '', currentPrice: null },
    foundation: { isMenuOpen: false, currentValue: '', currentPrice: null },
    log: { isMenuOpen: false, currentValue: '', currentPrice: null },
    buildings: { currentPrice: Number(document.querySelector('input[id="house"]').value) },

    open: (element, value) => {
        set(state => {
            const currentElement = state[element];
            currentElement.isMenuOpen = value;
            return { ...state }
        })
    },
    valuePrice: (element, value, price) => {
        set(state => {
            const currentElement = state[element];
            currentElement.currentValue = value;
            currentElement.currentPrice = price;
            return { ...state }
        })
    },
})))
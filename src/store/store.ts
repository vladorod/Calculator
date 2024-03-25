import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PositionElement, PositionName, Store } from "./interfaces.ts";

export const store = create(subscribeWithSelector<Store & Record<PositionName, PositionElement>>(set => ({
    roof: { isMenuOpen: false, currentValue: '', currentPrice: null },
    square: { isMenuOpen: false, currentValue: '', currentPrice: null },
    sceleton: { isMenuOpen: false, currentValue: '', currentPrice: null },
    foundation: { isMenuOpen: false, currentValue: '', currentPrice: null },
    log: { isMenuOpen: false, currentValue: '', currentPrice: null },
    buildings: { currentPrice: +document.querySelector('input[id="house"]').value },

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
    calc: () => {
        const _store = store.getState();
        let summ = 0;
        if (_store.roof.currentPrice && _store.square.currentPrice && _store.sceleton.currentPrice && _store.foundation.currentPrice && _store.log.currentPrice) {
            summ = _store.roof.currentPrice + _store.square.currentPrice + _store.sceleton.currentPrice + _store.foundation.currentPrice + _store.log.currentPrice + _store.buildings.currentPrice;
        }
        return (summ);
    },
    buildPrice: (price) => {
        set(state => {
            state.buildings.currentPrice = price;
            return { ...state }
        })
    },
    closeAll: () => {
        set(state => {
            Object.keys(state).forEach(element => {
                const currentElement = state[element];
                currentElement.isMenuOpen = false;
            })
            return { ...state }
        })
    }
})))
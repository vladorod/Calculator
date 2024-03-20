import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PositionElement, PositionName, Store } from "./interfaces.ts";

export const store = create(subscribeWithSelector<Store & Record<PositionName, PositionElement>>(set => ({
    roof: { isMenuOpen: false, currentValue: null },
    square: { isMenuOpen: false, currentValue: null },
    sceleton: { isMenuOpen: false, currentValue: null },
    foundation: { isMenuOpen: false, currentValue: null },
    log: { isMenuOpen: false, currentValue: null },

    open: (element, value) => {
        set(state => {
            const currentElement = state[element];
            currentElement.isMenuOpen = value;
            return { ...state }
        })
    }
})))

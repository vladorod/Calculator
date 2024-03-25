export interface PositionElement {
    isMenuOpen: boolean,
    currentValue: string,
    currentPrice: number | null
}

export enum ETabValue { 'house', 'bathhouse', 'small' }

export interface Store {
    buildings: { currentPrice: number },
    open: (element: PositionName, value: boolean) => void,
    valuePrice: (element: PositionName, value: string, price: number) => void,
    calc: () => void,
    buildPrice: (price: Number) => void,
    closeAll: () => void
}

export type PositionName = 'roof' | 'square' | 'foundation' | 'log' | 'sceleton';
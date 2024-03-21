export interface PositionElement {
    isMenuOpen: boolean,
    currentValue: string,
    currentPrice: number | null
}
export interface buildingsElement {
    currentPrice: number | null
}

export interface Store {
    open: (element: PositionName, value: boolean) => void,
    valuePrice: (element: PositionName, value: string, price: number) => void
}

export type PositionName = 'roof' | 'square' | 'foundation' | 'log' | 'sceleton';
export type buildingsName = 'buildings';
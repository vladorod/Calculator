export interface PositionElement {
    isMenuOpen: boolean,
    currentValue: number | null
}

export interface Store {
    open: (element: PositionName, value: boolean) => void
}

export type PositionName = 'roof' | 'square' | 'foundation' | 'log' | 'sceleton';
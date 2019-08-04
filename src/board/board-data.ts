import { ChipType } from "../chips/chip";

export interface WireData {
    id: string
    inputs: string[]
    outputs: string[]
    x: number
    y: number
}

export interface ChipData {
    id: string
    type: ChipType
    x: number
    y: number
}

export interface BoardData {
    wires: WireData[]
    chips: ChipData[]
}
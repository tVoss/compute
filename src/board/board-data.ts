import { ChipType } from "../chips/chip";

export interface WireData {
  id: string;
  input?: string;
  output?: string;
  x: number;
  y: number;
}

export interface ChipData {
  id: string;
  type: ChipType;
  x: number;
  y: number;
}

export interface BoardData {
  version: string;
  wires: WireData[];
  chips: ChipData[];
}

import {WineI} from "../types/wine.interface";

export interface WineState {
  wineList: WineI[];
}

export const initialState: WineState = {
  wineList: [],
};

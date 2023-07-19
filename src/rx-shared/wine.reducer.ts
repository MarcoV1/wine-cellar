import {Action, createReducer, on} from "@ngrx/store";
import {initialState, WineState} from "./wine.state";
import * as WineActions from "./wine.actions";

export const winesReducer = createReducer(
  initialState,
  on(WineActions.getListOfWinesSuccess, (state, { wineList }) => ({
    ...state,
    wineList: wineList,
  })),
);

export function reducer(state: WineState | undefined, action: Action) {
  return winesReducer(state, action);
}

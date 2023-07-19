import {createFeatureSelector, createSelector} from "@ngrx/store";
import {WineState} from "./wine.state";

export const selectWines = createFeatureSelector<WineState>("wines");

export const selectWinesList = createSelector(
  selectWines,
  (state: WineState) => state.wineList
);

export const selectWineById = (wineId: number) => createSelector(
  selectWines,
  (state: WineState) =>
    state?.wineList.find(wine => wine.id == wineId)
);

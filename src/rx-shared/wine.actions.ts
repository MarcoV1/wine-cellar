import {createAction, props} from "@ngrx/store";
import {WineI} from "../types/wine.interface";

export const getListOfWines = createAction(
  "[Wine List] Get Wines");

export const getListOfWinesSuccess = createAction(
  "[Wine List] Get Wines Success",
  props<{ wineList: WineI[] }>()
);

export const getListOfWinesFailed = createAction(
  "[Wine List] Get Wines Failed",
  props<{ error: any }>()
);

export const addNewWine = createAction(
  "[Wine] Add New Wine",
  props<{wine: WineI }>());

export const addNewWineSuccess = createAction(
  "[Wine] Add New Wine Success",
  props<{ wine: WineI }>()
);

export const addNewWineFailed = createAction(
  "[Wine] Add New Wine Failed",
  props<{ error: any }>()
);

export const updateWine = createAction(
  "[Wine] Update Wine",
  props<{ wineId: number, wine: WineI }>());

export const updateWineSuccess = createAction(
  "[Wine] Update Wine Success",
  props<{ wine: WineI }>()
);

export const updateWineFailed = createAction(
  "[Wine] Update Wine Failed",
  props<{ error: any }>()
);

export const deleteWine = createAction(
  "[Wine] Delete Wines",
  props<{ id: number }>());

export const deleteWineSuccess = createAction(
  "[Wine] Delete Wines Success",
  props<{ wineList: WineI[] }>()
);

export const deleteWineFailed = createAction(
  "[Wine] Delete Wines Failed",
  props<{ error: any }>()
);


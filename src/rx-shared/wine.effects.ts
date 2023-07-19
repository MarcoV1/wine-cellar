import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import * as WineActions from "./wine.actions";
import {Injectable} from "@angular/core";
import {WineDataHandlerService} from "../services/wine-datahandler.service";
import {Router} from "@angular/router";
import {getListOfWines} from "./wine.actions";

@Injectable()
export class WineEffects {

  loadWines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WineActions.getListOfWines.type, WineActions.getListOfWines),
      switchMap(() =>
        this.wineDataHandlerService.getListOfWines().pipe(
          map((wineList) =>
            WineActions.getListOfWinesSuccess({ wineList: wineList })
          ),
          catchError((error) =>
            of(WineActions.getListOfWinesFailed({ error: error }))
          )
        )
      )
    )
  );

  addWine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WineActions.addNewWine.type, WineActions.addNewWine),
      switchMap((action) =>
        this.wineDataHandlerService.addNewWine(action.wine).pipe(
          map((wine) => {
              this.router.navigate(['/list']);
              return WineActions.addNewWineSuccess({wine})
          }
          ),
          catchError((error) =>
            of(WineActions.addNewWineFailed({ error: error }))
          )
        )
      )
    )
  );

  updateWine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WineActions.updateWine.type, WineActions.updateWine),
      switchMap((action) =>
        this.wineDataHandlerService.updateWine(action.wineId, action.wine).pipe(
          map((wine) => {
              this.router.navigate(['/list']);
              return WineActions.updateWineSuccess({wine})
            }
          ),
          catchError((error) =>
            of(WineActions.updateWineFailed({ error: error }))
          )
        )
      )
    )
  );

  deleteWines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WineActions.deleteWine.type, WineActions.deleteWine),
      switchMap((action) =>
        this.wineDataHandlerService.deleteWine(action.id).pipe(
          mergeMap(() => of(getListOfWines())
          ),
          catchError((error) =>
            of(WineActions.deleteWineFailed({ error: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private wineDataHandlerService: WineDataHandlerService,
    private router: Router
  ) {}
}

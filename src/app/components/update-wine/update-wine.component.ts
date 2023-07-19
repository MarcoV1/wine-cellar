import { Component } from '@angular/core';
import {filter, map, Observable, switchMap, tap} from "rxjs";
import {WineI} from "../../../types/wine.interface";
import {selectWineById} from "../../../rx-shared/wine.selectors";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {WineState} from "../../../rx-shared/wine.state";

@Component({
  selector: 'app-update-wine',
  templateUrl: './update-wine.component.html'
})
export class UpdateWineComponent {

  wineId$ = this.activatedRoute.params.pipe(map((params) => params["id"]));

  wineDetail$: Observable<WineI> = this.wineId$.pipe(
    tap(wineId => console.log("w2", wineId)),
    filter(wineId => !!wineId),
    switchMap(wineId => this.store.select(selectWineById(wineId))),
    map(wine => wine as WineI)
  )

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<WineState>) {
  }

}

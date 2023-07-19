import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable, switchMap} from "rxjs";
import {WineI} from "../../../types/wine.interface";
import {selectWineById} from "../../../rx-shared/wine.selectors";
import {Store} from "@ngrx/store";
import {WineState} from "../../../rx-shared/wine.state";

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.scss', '../../assets/styles.scss']
})
export class WineDetailsComponent {

  wineId$ = this.activatedRoute.params.pipe(map((params) => params["id"]));

  wineDetail$: Observable<WineI> = this.wineId$.pipe(
    filter(wineId => !!wineId),
    switchMap(wineId => this.store.select(selectWineById(wineId))),
    map(wine => wine as WineI)
  )

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<WineState>) {
  }

}

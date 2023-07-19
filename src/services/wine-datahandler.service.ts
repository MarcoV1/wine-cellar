import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WineI} from "../types/wine.interface";
import {WineState} from "../rx-shared/wine.state";
import {selectWinesList} from "../rx-shared/wine.selectors";

@Injectable({
  providedIn: 'root'
})
export class WineDataHandlerService {

  wineList$ = this.store.select(selectWinesList);

  constructor(private httpClient: HttpClient,
              private store: Store<WineState>) { }

  getListOfWines(): Observable<WineI[]> {
    return this.httpClient.get(`http://localhost:3000/wines`) as Observable<WineI[]>;
  }

  addNewWine(newWine: WineI): Observable<WineI> {
    return this.httpClient.post(`http://localhost:3000/wines`, newWine) as Observable<WineI>;
  }

  updateWine(wineId: number, updatedWine: WineI): Observable<WineI> {
    return this.httpClient.put(`http://localhost:3000/wines/${wineId}`, updatedWine) as Observable<WineI>;
  }

  deleteWine(wineId: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/wines/${wineId}`) as Observable<any>;
  }

}

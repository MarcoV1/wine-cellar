import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import { deleteWine, getListOfWines} from "../../../rx-shared/wine.actions";
import {WineDataHandlerService} from "../../../services/wine-datahandler.service";
import {WineI} from "../../../types/wine.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss', '../../assets/styles.scss']
})
export class WineListComponent implements OnInit {

  constructor(private store: Store,
              public wineDataHandlerService: WineDataHandlerService,
              private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(getListOfWines());
  }

  onViewButtonClicked(item: WineI) {
    this.router.navigate(['/wine', item.id]);
  }

  onUpdateButtonClicked(item: WineI) {
    this.router.navigate(['/update', item.id]);
  }

  onDeleteButtonClicked(item: WineI) {
    this.store.dispatch(deleteWine( { id: item?.id }));
  }

}

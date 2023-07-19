import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WineListComponent} from "./components/wine-list/wine-list.component";
import {WineDetailsComponent} from "./components/wine-details/wine-details.component";
import {AddWineComponent} from "./components/add-wine/add-wine.component";
import {UpdateWineComponent} from "./components/update-wine/update-wine.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path : 'list', component : WineListComponent},
  {path : 'add', component : AddWineComponent},
  {path : 'update/:id', component : UpdateWineComponent},
  {path : 'wine/:id', component : WineDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineDetailsComponent } from './components/wine-details/wine-details.component';
import {EffectsModule} from "@ngrx/effects";
import {WineEffects} from "../rx-shared/wine.effects";
import {StoreModule} from "@ngrx/store";
import {winesReducer} from "../rx-shared/wine.reducer";
import { AddWineComponent } from './components/add-wine/add-wine.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { WineFormComponent } from './components/wine-form/wine-form.component';
import { UpdateWineComponent } from './components/update-wine/update-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineDetailsComponent,
    AddWineComponent,
    WineFormComponent,
    UpdateWineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      wines: winesReducer,
    }),
    EffectsModule.forRoot([WineEffects]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

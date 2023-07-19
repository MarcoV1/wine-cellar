import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addNewWine, updateWine} from "../../../rx-shared/wine.actions";
import {WineI} from "../../../types/wine.interface";

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.scss', '../../assets/styles.scss']
})
export class WineFormComponent implements OnChanges {
  @Input() addingNewWine = true;
  @Input() wineToUpdate?: WineI | null;

  form: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["wineToUpdate"] && !!this.wineToUpdate) {
      this.buildForm(this.wineToUpdate)
    }
  }

  buildForm(wine?: WineI) {
    this.form = this.formBuilder.group(
      {
        name: [wine?.name ? wine.name: "", Validators.required],
        year: [wine?.year ? wine.year: ""],
        vineyard: [wine?.vineyard ? wine.vineyard: ""],
        image: [wine?.image ? wine.image: ""]
      })
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

    if (this.addingNewWine) this.store.dispatch(addNewWine({wine: this.form.value}));
    else if (this.wineToUpdate) this.store.dispatch(updateWine({ wineId: this.wineToUpdate?.id, wine: this.form.value}));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}

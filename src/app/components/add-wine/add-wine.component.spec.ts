import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWineComponent } from './add-wine.component';

describe('AddWineComponent', () => {
  let component: AddWineComponent;
  let fixture: ComponentFixture<AddWineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWineComponent]
    });
    fixture = TestBed.createComponent(AddWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

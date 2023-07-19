import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWineComponent } from './update-wine.component';

describe('UpdateWineComponent', () => {
  let component: UpdateWineComponent;
  let fixture: ComponentFixture<UpdateWineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateWineComponent]
    });
    fixture = TestBed.createComponent(UpdateWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

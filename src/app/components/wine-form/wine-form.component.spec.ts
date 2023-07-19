import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineFormComponent } from './wine-form.component';

describe('WineFormComponent', () => {
  let component: WineFormComponent;
  let fixture: ComponentFixture<WineFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineFormComponent]
    });
    fixture = TestBed.createComponent(WineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

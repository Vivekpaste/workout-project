import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutComponent } from './view-workout.component';

describe('ViewWorkoutComponent', () => {
  let component: ViewWorkoutComponent;
  let fixture: ComponentFixture<ViewWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWorkoutComponent]
    });
    fixture = TestBed.createComponent(ViewWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

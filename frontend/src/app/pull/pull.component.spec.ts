import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullComponent } from './pull.component';

describe('PullComponent', () => {
  let component: PullComponent;
  let fixture: ComponentFixture<PullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PullComponent]
    });
    fixture = TestBed.createComponent(PullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

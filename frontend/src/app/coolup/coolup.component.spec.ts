import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolupComponent } from './coolup.component';

describe('CoolupComponent', () => {
  let component: CoolupComponent;
  let fixture: ComponentFixture<CoolupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolupComponent]
    });
    fixture = TestBed.createComponent(CoolupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

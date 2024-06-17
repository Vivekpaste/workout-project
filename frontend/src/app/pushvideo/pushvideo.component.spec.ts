import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushvideoComponent } from './pushvideo.component';

describe('PushvideoComponent', () => {
  let component: PushvideoComponent;
  let fixture: ComponentFixture<PushvideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PushvideoComponent]
    });
    fixture = TestBed.createComponent(PushvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

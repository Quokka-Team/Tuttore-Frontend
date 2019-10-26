import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCardHomeComponent } from './tutor-card-home.component';

describe('TutorCardHomeComponent', () => {
  let component: TutorCardHomeComponent;
  let fixture: ComponentFixture<TutorCardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorCardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

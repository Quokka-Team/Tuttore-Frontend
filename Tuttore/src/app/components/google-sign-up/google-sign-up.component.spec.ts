import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignUpComponent } from './google-sign-up.component';

describe('GoogleSignUpComponent', () => {
  let component: GoogleSignUpComponent;
  let fixture: ComponentFixture<GoogleSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

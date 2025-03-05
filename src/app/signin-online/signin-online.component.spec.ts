import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOnlineComponent } from './signin-online.component';

describe('SigninOnlineComponent', () => {
  let component: SigninOnlineComponent;
  let fixture: ComponentFixture<SigninOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

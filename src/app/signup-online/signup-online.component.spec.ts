import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOnlineComponent } from './signup-online.component';

describe('SignupOnlineComponent', () => {
  let component: SignupOnlineComponent;
  let fixture: ComponentFixture<SignupOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

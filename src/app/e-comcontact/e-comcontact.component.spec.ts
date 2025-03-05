import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EComcontactComponent } from './e-comcontact.component';

describe('EComcontactComponent', () => {
  let component: EComcontactComponent;
  let fixture: ComponentFixture<EComcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EComcontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EComcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

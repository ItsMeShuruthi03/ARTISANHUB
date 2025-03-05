import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicLabComponent } from './ceramic-lab.component';

describe('CeramicLabComponent', () => {
  let component: CeramicLabComponent;
  let fixture: ComponentFixture<CeramicLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeramicLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeramicLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

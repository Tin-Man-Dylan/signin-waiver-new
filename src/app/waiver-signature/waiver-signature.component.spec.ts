import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverSignatureComponent } from './waiver-signature.component';

describe('WaiverSignatureComponent', () => {
  let component: WaiverSignatureComponent;
  let fixture: ComponentFixture<WaiverSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

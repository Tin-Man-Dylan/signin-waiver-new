import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverInputsComponent } from './waiver-inputs.component';

describe('WaiverInputsComponent', () => {
  let component: WaiverInputsComponent;
  let fixture: ComponentFixture<WaiverInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

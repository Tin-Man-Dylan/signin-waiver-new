import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverTextComponent } from './waiver-text.component';

describe('WaiverTextComponent', () => {
  let component: WaiverTextComponent;
  let fixture: ComponentFixture<WaiverTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

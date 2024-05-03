import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPopupComponent } from './window-popup.component';

describe('WindowPopupComponent', () => {
  let component: WindowPopupComponent;
  let fixture: ComponentFixture<WindowPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

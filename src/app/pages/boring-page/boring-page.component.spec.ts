import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoringPageComponent } from './boring-page.component';

describe('BoringPageComponent', () => {
  let component: BoringPageComponent;
  let fixture: ComponentFixture<BoringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoringPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesPageComponent } from './slides-page.component';

describe('SlidesPageComponent', () => {
  let component: SlidesPageComponent;
  let fixture: ComponentFixture<SlidesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

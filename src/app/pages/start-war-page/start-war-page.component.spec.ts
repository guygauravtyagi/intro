import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWarPageComponent } from './start-war-page.component';

describe('StartWarPageComponent', () => {
  let component: StartWarPageComponent;
  let fixture: ComponentFixture<StartWarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartWarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartWarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

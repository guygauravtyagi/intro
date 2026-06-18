import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambolaPageComponent } from './tambola-page.component';

describe('TambolaPageComponent', () => {
  let component: TambolaPageComponent;
  let fixture: ComponentFixture<TambolaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambolaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambolaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

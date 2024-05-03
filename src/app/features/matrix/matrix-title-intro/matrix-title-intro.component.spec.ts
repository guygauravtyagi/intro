import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixTitleIntroComponent } from './matrix-title-intro.component';

describe('MatrixTitleIntroComponent', () => {
  let component: MatrixTitleIntroComponent;
  let fixture: ComponentFixture<MatrixTitleIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixTitleIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixTitleIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixTerminalWindowComponent } from './matrix-terminal-window.component';

describe('MatrixTerminalWindowComponent', () => {
  let component: MatrixTerminalWindowComponent;
  let fixture: ComponentFixture<MatrixTerminalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixTerminalWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixTerminalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

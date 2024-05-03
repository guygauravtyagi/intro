import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotrPageComponent } from './lotr-page.component';

describe('LotrPageComponent', () => {
  let component: LotrPageComponent;
  let fixture: ComponentFixture<LotrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotrPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LotrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraAComponent } from './primera-a.component';

describe('PrimeraAComponent', () => {
  let component: PrimeraAComponent;
  let fixture: ComponentFixture<PrimeraAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

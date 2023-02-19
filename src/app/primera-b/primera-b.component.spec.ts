import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraBComponent } from './primera-b.component';

describe('PrimeraBComponent', () => {
  let component: PrimeraBComponent;
  let fixture: ComponentFixture<PrimeraBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraNacionalComponent } from './primera-nacional.component';

describe('PrimeraNacionalComponent', () => {
  let component: PrimeraNacionalComponent;
  let fixture: ComponentFixture<PrimeraNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraNacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

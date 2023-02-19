import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertadoresComponent } from './libertadores.component';

describe('LibertadoresComponent', () => {
  let component: LibertadoresComponent;
  let fixture: ComponentFixture<LibertadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibertadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

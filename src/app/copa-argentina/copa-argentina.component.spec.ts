import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaArgentinaComponent } from './copa-argentina.component';

describe('CopaArgentinaComponent', () => {
  let component: CopaArgentinaComponent;
  let fixture: ComponentFixture<CopaArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopaArgentinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

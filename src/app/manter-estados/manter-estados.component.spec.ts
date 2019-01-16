import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterEstadosComponent } from './manter-estados.component';

describe('ManterEstadosComponent', () => {
  let component: ManterEstadosComponent;
  let fixture: ComponentFixture<ManterEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

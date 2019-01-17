import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterCidadesComponent } from './manter-cidades.component';

describe('ManterCidadesComponent', () => {
  let component: ManterCidadesComponent;
  let fixture: ComponentFixture<ManterCidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterCidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

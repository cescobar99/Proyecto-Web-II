import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEquipoComponent } from './perfil-equipo.component';

describe('PerfilEquipoComponent', () => {
  let component: PerfilEquipoComponent;
  let fixture: ComponentFixture<PerfilEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

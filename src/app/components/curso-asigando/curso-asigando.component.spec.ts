import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAsigandoComponent } from './curso-asigando.component';

describe('CursoAsigandoComponent', () => {
  let component: CursoAsigandoComponent;
  let fixture: ComponentFixture<CursoAsigandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoAsigandoComponent]
    });
    fixture = TestBed.createComponent(CursoAsigandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

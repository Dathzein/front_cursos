import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit{

  idPerfil: any;
  /**
   *
   */
  constructor( private route: Router) {}

  ngOnInit(): void {
      this.idPerfil = localStorage.getItem('perfil')
  }
  irCursos(){
    this.route.navigateByUrl('/home/cursos');
  }
  irAlumnos(){
    this.route.navigateByUrl('/home/alumnos');
  }
  irUsuarios(){
    this.route.navigateByUrl('/home/usuarios');
  }
  irAsignar(){
    this.route.navigateByUrl('/home/asignar-curso');

  }
  irAsignadis(){
    this.route.navigateByUrl('/home/cursos-asignados');

  }
}

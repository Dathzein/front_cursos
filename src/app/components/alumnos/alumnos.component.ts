import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit{

  students: any = [];
  modificar!: FormGroup;
  crearNuevo!: FormGroup;
  asignarPerfil!: FormGroup;


  constructor(private dataService: DataService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.modificar = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      //Es momento de los validators
    });
    this.crearNuevo = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      //Es momento de los validators
    });
    this.asignarPerfil = this.formBuilder.group({
      id_user: ['', [Validators.required]],
      id_perfil: ['', [Validators.required]],
    })
    this.obtenerAlumnos()
    this.obtenerPerfil()
  }
  volver(){

  }

  obtenerAlumnos(){
    this.dataService.getStudents().subscribe((res:any)=>{
      this.students = res.body;
    })
  }
  perfil: any;
  idPerfil:any;
  obtenerPerfil(){
    this.dataService.getPerfil().subscribe((res:any)=>{
      let lista = res.body;
      for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if(element.id == 2){
          this.perfil = element.nombre_perfil;
          this.idPerfil = element.id;
        }
      }
    })
  }
  idUser: any;
  crearAlumnoNuevo(){
    //Registrar alumno
    this.dataService.addStudent(this.crearNuevo.value).subscribe((res:any)=>{
      //registrarle el perfil
      this.idUser = res.body[0].insertId
      this.asignarPerfil = this.formBuilder.group({
        id_user: [this.idUser],
        id_perfil: [this.idPerfil],
      })
      this.dataService.addRoleToStudent(this.asignarPerfil.value).subscribe((res:any)=>{
        this.obtenerAlumnos();
      })
    })
  }
  modificarUsuarioExitente(value:any){
    this.modificar = this.formBuilder.group({
      id: [value.id_user, [Validators.required]],
      nombre: [value.nombre, [Validators.required]],
      email: [value.email, [Validators.required]],
      telefono: [value.telefono, [Validators.required]],
      contrasena: [value.contrasena, [Validators.required]],
      //Es momento de los validators
    });
  }
  modificarInfo(){
    this.dataService.addStudent(this.modificar.value).subscribe((res:any)=>{
      //registrarle el perfil
      this.obtenerAlumnos();

    })
  }
  eliminarUsuarioExitente(value:any){
    this.modificar = this.formBuilder.group({
      id: [value.id_user, [Validators.required]],
      nombre: [value.nombre, [Validators.required]],
      email: [value.email, [Validators.required]],
      telefono: [value.telefono, [Validators.required]],
      contrasena: [value.contrasena, [Validators.required]],
      //Es momento de los validators

    });
    this.dataService.deleteUser(this.modificar.value).subscribe((res:any)=>{
      this.obtenerAlumnos();

    })

  }

  eliminarAlumno(){

  }
}

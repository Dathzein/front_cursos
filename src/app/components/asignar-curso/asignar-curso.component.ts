import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-asignar-curso',
  templateUrl: './asignar-curso.component.html',
  styleUrls: ['./asignar-curso.component.scss']
})
export class AsignarCursoComponent {


  asignaciones: any = [];
  students: any = [];
  modificar!: FormGroup;
  crearNuevo!: FormGroup;
  asignarCurso!: FormGroup;
  cursos: any;


  constructor(private dataService: DataService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {

    this.asignarCurso = this.formBuilder.group({
      id_curso: ['', [Validators.required]],
      id_alumno: ['', [Validators.required]],
    })
    this.obtenerAsignaciones()
    this.obtenerAlumnos()
    this.obtenerCursos()
  }
  volver(){

  }

  obtenerAsignaciones(){
    this.dataService.getCoursesAndStudents().subscribe((res:any)=>{
      this.asignaciones = res.body;
    })
  }
  perfil: any;
  idPerfil:any;
  obtenerAlumnos(){
    this.dataService.getStudents().subscribe((res:any)=>{
      this.students = res.body;
    })
  }
  obtenerCursos(){
    this.dataService.getCoures().subscribe((res:any)=>{
      this.cursos = res.body;
    })
  }
  crearAsignacionNueva(){
    //Registrar alumn
    this.dataService.addCourseToStudent(this.asignarCurso.value).subscribe((res:any)=>{
      this.obtenerAsignaciones();
    })
  }
}

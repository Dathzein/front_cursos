import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  cursos: any = [];
  modificar!: FormGroup;
  crearNuevo!: FormGroup;
  asignarCurso!: FormGroup;


  constructor(private dataService: DataService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.modificar = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre_curso: ['', [Validators.required]],
      intensidad_horaria: ['', [Validators.required]],
      //Es momento de los validators
    });
    this.crearNuevo = this.formBuilder.group({
      nombre_curso: ['', [Validators.required]],
      intensidad_horaria: ['', [Validators.required]],
      //Es momento de los validators
    });
    this.asignarCurso = this.formBuilder.group({
      id_alumno: ['', [Validators.required]],
      id_curso: ['', [Validators.required]],
    })
    this.obtenerCursos()
  }
  volver(){

  }

  obtenerCursos(){
    this.dataService.getCoures().subscribe((res:any)=>{
      this.cursos = res.body;
    })
  }
  idUser: any;
  crearCursoNuevo(){
    //Registrar alumno
    this.dataService.addCourse(this.crearNuevo.value).subscribe((res:any)=>{
      //registrarle el perfil
      this.obtenerCursos();

    })
  }
  modificarCurso(value:any){
    this.modificar = this.formBuilder.group({
      id: [value.id, [Validators.required]],
      nombre_curso: [value.nombre_curso, [Validators.required]],
      intensidad_horaria: [value.intensidad_horaria, [Validators.required]],
      //Es momento de los validators
    });
  }
  modificarInfo(){
    this.dataService.addCourse(this.modificar.value).subscribe((res:any)=>{
      //registrarle el perfil
      this.obtenerCursos();

    })
  }
  eliminarCurso(value:any){
    this.modificar = this.formBuilder.group({
      id: [value.id, [Validators.required]],
      nombre_curso: [value.nombre_curso, [Validators.required]],
      intensidad_horaria: [value.intensidad_horaria, [Validators.required]],
      //Es momento de los validators

    });
    this.dataService.deleteCourse(this.modificar.value).subscribe((res:any)=>{
      this.obtenerCursos();

    })

  }

  eliminarAlumno(){

  }
}

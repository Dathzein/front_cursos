import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-curso-asigando',
  templateUrl: './curso-asigando.component.html',
  styleUrls: ['./curso-asigando.component.scss']
})
export class CursoAsigandoComponent {
  asignaciones: any = [];
  id:any;

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.id = localStorage.getItem('usuario')

    this.obtenerAsignaciones();
  }

  obtenerAsignaciones(){
    let data = {
      id: this.id
    }
    this.dataService.getMyAsignations(data).subscribe((res:any)=>{
      this.asignaciones = res.body;
      console.log(this.asignaciones)
    })
  }
}

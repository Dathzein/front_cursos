import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';
import { AsignarCursoComponent } from 'src/app/components/asignar-curso/asignar-curso.component';
import { CursosComponent } from 'src/app/components/cursos/cursos.component';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios.component';
import { CursoAsigandoComponent } from '../../components/curso-asigando/curso-asigando.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'administrador',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'administrador',
        component:AdministradorComponent
      },
      {
        path: 'alumnos',
        component: AlumnosComponent,
      },
      {
        path: 'asignar-curso',
        component: AsignarCursoComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'cursos-asignados',
        component: CursoAsigandoComponent,
      },
    ]
  }
]

@NgModule({

  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

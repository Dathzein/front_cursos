import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
{
  path: 'login',
  component:LoginComponent
},
{
  path: 'error',
  component:ErrorComponent
},
{
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule),
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'error'
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

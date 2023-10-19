import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  login(data: any) {
    return this.http.post<any>(this.baseUrl + 'api/usuarios/login', data);
  }
  getUsers() {
    return this.http.get<any>(this.baseUrl + 'api/usuarios');
  }
  getStudents() {
    return this.http.get<any>(this.baseUrl + 'api/usuarios/alumnos');
  }
  getPerfil() {
    return this.http.get<any>(this.baseUrl + 'api/perfil');
  }

  addStudent(data: any) {
    return this.http.post<any>(this.baseUrl + 'api/usuarios', data);
  }
  addRoleToStudent(data: any) {
    return this.http.post<any>(this.baseUrl + 'api/perfil-usuario', data);
  }
  deleteUser(data: any) {
    return this.http.put<any>(this.baseUrl + 'api/usuarios', data);
  }

  getCoures() {
    return this.http.get<any>(this.baseUrl + 'api/cursos');
  }

  addCourseToStudent(data: any) {
    return this.http.post<any>(this.baseUrl + 'api/curso-alumno', data);
  }
  addCourse(data: any) {
    return this.http.post<any>(this.baseUrl + 'api/cursos', data);
  }
  deleteCourse(data: any) {
    return this.http.put<any>(this.baseUrl + 'api/cursos', data);
  }

  getCoursesAndStudents(){
    return this.http.get<any>(this.baseUrl + 'api/curso-alumno');
  }

  deleteAsignacion(data: any) {
    return this.http.put<any>(this.baseUrl + 'api/curso-alumno', data);
  }

  getMyAsignations(data:any){
    return this.http.post<any>(this.baseUrl + 'api/curso-alumno/asignados',data);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  mensaje: string = '';
  dataLogin!: FormGroup;
/**
 *
 */
constructor(
  private dataService: DataService,
private formBuilder: FormBuilder,
private route: Router,
) {


}

  ngOnInit(): void {
    this.dataLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      //Es momento de los validators
    });

  }

  loguearse(){
    localStorage.setItem('perfil','')
        localStorage.setItem('usuario', '')
    this.dataService.login(this.dataLogin.value).subscribe((res:any)=>{
      if(res.body.length == 0){
        this.mensaje = "No perri esa no es la pass"
      }else{
        this.route.navigateByUrl("/home")
        console.log(res.body)
        localStorage.setItem('perfil',res.body[0].id_perfil)
        localStorage.setItem('usuario', res.body[0].id_user)
      }
    })
  }





}

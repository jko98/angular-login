import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionComponent } from '../autentificacion/autentificacion.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public miFormu!:FormGroup;

constructor(private fb:FormBuilder,private loginHyz:AutentificacionComponent) {

}

ngOnInit(): void {
this.miFormu = this.createMyForm();
}


private createMyForm():FormGroup{
  return this.fb.group({
    usuario:['', [Validators.required]],
    password:['',Validators.required]
  });
}

public submitFormulario(){
 if(this.miFormu.invalid){
  Object.values(this.miFormu.controls).forEach(control=>{
control.markAllAsTouched();
  });
  
  return;
 }



 if(!this.loginHyz.ingresarApp(this.miFormu.value)){
  alert("Usuario o contraseña invalidos")
 }
}

public get f():any{
  return this.miFormu.controls;
}

}

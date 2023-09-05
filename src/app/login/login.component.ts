import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public miFormu!:FormGroup;

constructor(private fb:FormBuilder) {

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
  return;
 }


 alert("Se enviara el formulario")
 console.log(this.miFormu.value)
}

public get f():any{
  return this.miFormu.controls;
}

}

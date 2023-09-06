import { Component } from '@angular/core';

@Component({
  selector: 'app-autentificacion',
  templateUrl: './autentificacion.component.html',
  styleUrls: ['./autentificacion.component.css']
})
export class AutentificacionComponent {

private ingresar:boolean = false;

  constructor() {}


  public ingresarApp(obj:any):boolean{
    this.ingresar = obj.usuario == 'algo12@hotmail.com' && obj.password == '1234';

    return this.ingresar;
  }

  public habilitarlogin(){
    return this.ingresar;
  }
}

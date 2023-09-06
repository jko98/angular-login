import { Component } from '@angular/core';
import { AutentificacionComponent } from './autentificacion/autentificacion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-login';

  constructor(private loginHyz:AutentificacionComponent){
    
  }


  public visualizar():boolean{
    return this.loginHyz.habilitarlogin();
  }
}

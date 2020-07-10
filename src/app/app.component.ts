import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXATAREAS';
  cadena: string;

  guardarCadena (cadena){
    localStorage.setItem('cadena', cadena);
  }

  mostrarCadena(){
     this.cadena = localStorage.getItem('cadena');
  }
}

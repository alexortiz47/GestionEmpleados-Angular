import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPadre: any[];

  constructor() {
    this.arrPadre = [];
  }

  guardarObjeto($event) {
    this.arrPadre.push($event);
    console.log(this.arrPadre);
  }

}

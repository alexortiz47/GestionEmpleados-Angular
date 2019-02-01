import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: any[];

  constructor() {
    this.arrEmpleados = [];
  }

  guardarEmpleado($event) {
    this.arrEmpleados.push($event);
    console.log(this.arrEmpleados);
  }

}

import { Component } from '@angular/core';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: any[];

  constructor(private empleadosService: EmpleadosService) {
    this.arrEmpleados = this.empleadosService.getAll(); // Con esto recogemos el array que hemos creado en nuestro servicio.
  }

  guardarEmpleado($event) {
    this.arrEmpleados.push($event);
  }

  departamentoSeleccionado($event) {
    if($event.target.value == 'Todos') {
      this.arrEmpleados = this.empleadosService.getAll();
    }else {
      this.arrEmpleados = this.empleadosService.getByDepartamento($event.target.value)
    }

  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() mandarEmpleado = new EventEmitter;

  nombre: string;
  apellidos: string;
  departamento: string;
  datosEmpleado: any;

  constructor() {
    this.nombre = '';
    this.apellidos = '';
    this.departamento = '';
    this.datosEmpleado = {};
  }

  ngOnInit() {
  }

  guardarDatos() {
    this.datosEmpleado = {
      nomb: this.nombre,
      apell: this.apellidos,
      depar: this.departamento
    }

    this.mandarEmpleado.emit(this.datosEmpleado);

  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() mandarObjeto = new EventEmitter;

  nombre: string;
  apellidos: string;
  departamento: string;
  objetoDatos: any;

  constructor() {
    this.nombre = '';
    this.apellidos = '';
    this.departamento = '';
    this.objetoDatos = {};
  }

  ngOnInit() {
  }

  guardarDatos() {
    this.objetoDatos = {
      nomb: this.nombre,
      apell: this.apellidos,
      depar: this.departamento
    }

    this.mandarObjeto.emit(this.objetoDatos);

  }

}

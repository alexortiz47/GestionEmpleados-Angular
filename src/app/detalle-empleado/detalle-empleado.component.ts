import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  @Input() empleado: any;

  diseno: boolean;
  informatica: boolean;
  marketing: boolean;
  ventas: boolean;

  constructor() {
    this.empleado = {};
    this.diseno = false;
    this.informatica = false;
    this.marketing = false;
    this.ventas = false;

  }
  ngOnInit() {
    if(this.empleado.depar == 'Diseño') {
      this.diseno = true;
    } else if(this.empleado.depar == 'Informática') {
      this.informatica = true;
    } else if(this.empleado.depar == 'Marketing') {
      this.marketing = true;
    } else if(this.empleado.depar == 'Ventas') {
      this.ventas = true;
    }
  }

}

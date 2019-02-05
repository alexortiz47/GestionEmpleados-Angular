import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Esto significa que va a estar accesible a nuivel global
})
export class EmpleadosService {

  arrEmpleados: any[];

  constructor() {
    this.arrEmpleados = [
      {nomb: 'Pepe', apell: 'Ramirez', depar: 'Marketing'},
      {nomb: 'Rocío', apell: 'Gómez', depar: 'Ventas'},
      {nomb: 'Aurelio', apell: 'González', depar: 'Informática'},
      {nomb: 'María', apell: 'Ros', depar: 'Ventas'},
      {nomb: 'Alex', apell: 'Ortiz', depar: 'Informática'}
    ]
  }

  getAll(): any[] {
    return this.arrEmpleados;
  }

  getByDepartamento(pDepartamento: string): any[] {
    // let arrFiltrado = this.arrEmpleados.filter((item) => {
    //   return item.depar === pDepartamento;
    // })
    // return arrFiltrado;
    return this.arrEmpleados.filter(item => item.depar === pDepartamento); // Es lo mismo que arriba. Simplemente como la arrow funcion solo tiene un return se puede quitar las llaves y el return, y como solo hay un prametro en la funcion anonima, tambien se quitan los parentesis. Y como el return era de una variable, podemos ahorrarnos esa variable que hemos creado.
  }

}

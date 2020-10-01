import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root',
})
export class MisServiciosService {
  public ciudades: Ciudad[];

  constructor() {
    this.ciudades = [];
  }

  // Metodo para ver todas las ciudades desde el servicio
  public getAll(): Ciudad[] {
    return this.ciudades;
  }

  // Metodo para obtener una ciudad en concreto desde el formulario por su codigo desde el servicio
  getOne(codigo: string): Ciudad {
    let resultado: Ciudad = null;
    for (let i = 0; i < this.ciudades.length; i++) {
      if (codigo === this.ciudades[i].codigo) {
        resultado = this.ciudades[i];
      }
    }
    return resultado;
  }

  // Metodo para añadir ciudad desde el servicio
  public add(ciudad: Ciudad): boolean {
    let estado = false;
    if (ciudad != null) {
      this.ciudades.push(ciudad);
      estado = true;
    }
    return estado;
  }

  // Metodo para eliminar datos por el codigo de la ciudad
  delete(code: string) {
    for (let i = 0; i < this.ciudades.length; i++) {
      if (code === this.ciudades[i].codigo) {
        this.ciudades.splice(i, 1);
      }
    }
  }
}

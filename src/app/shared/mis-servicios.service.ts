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


  // Metodo para editar los datos por medio del codigo de la ciudad
  edit(code:string, ciudad:Ciudad): boolean{
    let ciudadUpdate = new Ciudad(ciudad.nombre,ciudad.pais,ciudad.codigo)
    let estado = false;
    for (let i = 0; i < this.ciudades.length; i++) {
      if (code == this.ciudades[i].codigo && ciudad != null ) {
        estado = true;
        this.ciudades[i] = ciudadUpdate;
      }
      return estado;
    }
  }
}

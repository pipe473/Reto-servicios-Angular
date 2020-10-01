import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class MisServiciosService {
  public ciudades: Ciudad[];

  constructor() {
    this.ciudades = [];
   }
  
   // Metodo para ver todas las ciudades
  public getAll(): Ciudad[]{
   return this.ciudades;
  }

  // Metodo para añadir ciudad
  public add(ciudad:Ciudad): boolean{
    let estado = false;
    if (ciudad != null) {
      this.ciudades.push(ciudad);
      estado = true;
    }
    return estado;
  }
}

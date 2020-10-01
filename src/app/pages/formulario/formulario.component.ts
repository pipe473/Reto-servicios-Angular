import { Component, OnInit } from '@angular/core';
import { MisServiciosService } from 'src/app/shared/mis-servicios.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public ciudadEncontrada: Ciudad = null;

  constructor(public misServicios: MisServiciosService) {}

  // Metodo del controlador que crea una ciudad invocando el metodo del servicio
  public crear(nombre: string, pais: string, codigo: string) {
    let ciudad = new Ciudad(nombre, pais, codigo);
    let nuevoEstado = this.misServicios.add(ciudad);
    if (nuevoEstado == true) {
      alert('Ciudad creada!');
    } else {
      alert('Algo ha ido mal!');
    }
  }

  ngOnInit(): void {}

  // Metodo del controlador que llama al metodo del servicio para encontrar una ciudad por su codigo
  public encontrarCiudad(codigo: HTMLInputElement) {
    this.ciudadEncontrada = this.misServicios.getOne(codigo.value);
    console.log(this.ciudadEncontrada);
  }
  
  //Metodo del controlador que llama al metodo del servicio para eliminar una ciudad por su codigo
  public eliminarCiudad(codigo:HTMLInputElement){
    this.misServicios.delete(codigo.value);
    console.log("ciudad eliminada correctamente!");
    console.log(codigo.value);
   }
 
}

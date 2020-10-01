import { Component, OnInit } from '@angular/core';
import { MisServiciosService } from 'src/app/shared/mis-servicios.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public ciudadEncontrada: Ciudad = null;

  constructor(public misServicios: MisServiciosService) { }

  public crear(nombre:string, pais:string, codigo:string)
  {
    let ciudad = new Ciudad(nombre, pais, codigo)
    let nuevoEstado = this.misServicios.add(ciudad);
    if (nuevoEstado == true) {
      alert('Ciudad creada!');
    } else {
      alert('Algo ha ido mal!');
    }
    
  }

  ngOnInit(): void {
  }

  public find(codigo:HTMLInputElement){
    this.ciudadEncontrada = this.misServicios.getOne(codigo.value)
       console.log(this.ciudadEncontrada);
       
  }

}

import { Component, OnInit } from '@angular/core';
import { MisServiciosService } from 'src/app/shared/mis-servicios.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  // ESta variable es la que llamo desde mi vista.html
  public ciudades: Ciudad[];

  constructor(public misServicios: MisServiciosService) {
     this.ciudades = this.misServicios.getAll();    
   }

  ngOnInit(): void {
  }

}

import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // @ViewChild hace la busqueda del elemento txtBuscar en el HTML y lo asignara a "elemento"
  @ViewChild('txtBuscar') elemento!: ElementRef<HTMLInputElement>;

  // Aqui estamos estableciendo una palabra reservada para nuestro servicio, de igual manera, inicializandolo
  constructor(private GifsService: GifsService) {

  }

  buscar() {
    // .nativeElement extrae el valor de "elemento" que nativamente trae desde el input en el HTML
    const valor = this.elemento.nativeElement.value

    // trim() limpia los espacios en blanco, de atras y adelante
    // .length cuenta la cantidad de caracteres, en este caso si es "igual a 0", entonces no retornara nada a la busqueda 
    if (valor.trim().length === 0) {
      return;
    }

    this.GifsService.buscarGifs(valor)

    this.elemento.nativeElement.value = '';
  }
}

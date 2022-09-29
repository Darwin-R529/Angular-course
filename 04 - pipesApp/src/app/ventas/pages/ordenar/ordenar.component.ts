import { Component } from '@angular/core';
import { Color, Heroe } from "../../interfaces/ventas.interfaces";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = 'nombre';

  heroes: Heroe[] = [
    {
      nombre: 'SuperMan',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
  ]


  cambiarBoolean() {
    this.enMayusculas = !this.enMayusculas;
  }


  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log(valor);
  }
}

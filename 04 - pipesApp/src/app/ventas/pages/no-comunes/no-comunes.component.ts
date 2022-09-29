import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '1': 'tenemos 1 cliente esperando',
    '2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Mabel'
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop()

    console.log(this.clientes)
  }



  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }


  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'AquaMan',
      vuela: false
    },
  ]


  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  });
}

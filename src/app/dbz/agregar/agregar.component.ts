import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService) {

  }

  //@Output() es parecido al @Input pero con la funcionalidad de emitir eventos
  //<Persona> -> siempre es necesario especificar el tipo de dato que se va a emitir <TipoDeDato>
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  cambiarNombre(event: any) {
    console.log(event.target.value)
  }

  agregar() {
    // /trim() -> para borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.DbzService.agergarPersonaje(this.nuevo)

    //De esta manera emitimos OnNuevoPersonaje hacie el componente padre
    //this.onNuevoPersonaje.emit(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}

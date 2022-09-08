import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 9500
        }
    ]

    get personajes(): Personaje[] {
        // [] indivan que es un arreglo y los "..." es el operador spread, indica que separa cada uno de los elementos del arreglo y crea uno nuevo
        return [...this._personajes];
    }

    constructor() { }


    agergarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje)
    }

}
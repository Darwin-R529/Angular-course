//emun -> enumeracion de datos
export enum Color {
    rojo, negro, azul, verde
}


export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}
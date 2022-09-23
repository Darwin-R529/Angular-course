import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false;
  capital: Country[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    // Consumiendo el servicio API con el subscribe
    this.paisService.buscarCapital(termino).subscribe(capital => {
      console.log(capital);
      this.capital = capital;
      // Ingresamos la data de la API en this.paises

    }, (err) => {
      this.hayError = true;
      this.capital = [];
    }
    );

  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}

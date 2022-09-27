import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: []
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false;
  capitales: Country[] = []
  buscarCapital: string = 'buscar capital'

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    // Consumiendo el servicio API con el subscribe
    this.paisService.buscarCapital(termino).subscribe(capitales => {
      console.log(capitales);
      this.capitales = capitales;
      // Ingresamos la data de la API en this.paises

    }, (err) => {
      this.hayError = true;
      this.capitales = [];
    }
    );

  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA ', 'CARICOM ', 'PA ', 'AU', 'USAN', 'EEU'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    
    if ( region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region).subscribe(paises => this.paises = paises);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  // ActivatedRoute trae lo necesario para poder subscribirnos a cualquier cambio URL 
  constructor(private activatedRoute: ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {

    // Ambas funciones hacen lo mismo

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.PaisService.getPaisPorAlpha(id)), tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais[0];
      });

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this.PaisService.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais);

    //       })
    //   })
  }

}

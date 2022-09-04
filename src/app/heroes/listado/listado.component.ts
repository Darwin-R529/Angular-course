import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'IroMan', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado: String = '';

  borrarHeroe() {
    console.log('borrando')
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    console.log(this.heroes);
  }
}

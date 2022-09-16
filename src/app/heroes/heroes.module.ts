import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    //Todos los modulos unicamente
    imports: [
        //Esta importacion ofrece directivas como el NgIf o NgFor
        CommonModule
    ]
})

export class HeroesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Módulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from "./shared/shared.module";
import { VentasModule } from "./ventas/ventas.module";

// Cambiar el locale de la app (idioma/region)
import '@angular/common/locales/global/es-HN';
import '@angular/common/locales/global/fr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

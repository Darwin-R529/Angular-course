import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {

  nombreLower: string = 'darwin';
  nombreUpper: string = 'DARWIN';
  nombreCompleto: string = 'dArwIn rOdaS';

  fecha: Date = new Date(); //El dia de hoy
}

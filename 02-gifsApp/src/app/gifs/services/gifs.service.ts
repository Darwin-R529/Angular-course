import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  // Nos especifica que el servicio de manera global, sin necesidad de estar exportando o importando 
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'aNauZXnr8yAgelWQJJnFiPo22fC8KwfK';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  // Gif[] es el tipo que traemos desde nuestra interface, creada con la data de postman y mapeada con https://app.quicktype.io/
  public resultados: Gif[] = [];

  get historial() {
    // [... ] nos especifica que rompe la relacion con _historia original, haciendolo funcional como uno propio dentro del get
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

    // Esta funcion hace que lo que esta en el localStorage, ingrese a _historial y asi se mantenga mas tiempo al recargar la pagina
    // JSON.parse -> reconstrulle de un JSON.stringify a su estructura original
    // || [] -> indiva que _historial puede ser un arreglo vacio de igual forma, importanta si no la app crashea
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    // Esta forma es equivalente a la linea anterior (hacen lo mismo)
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);  
    // }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  // query = consulta
  buscarGifs(query: string) {

    // De esta manera establecemos que el parametro ingresado este siempre en minusculas 
    query = query.trim().toLocaleLowerCase();

    // Con .includes(query) -> indico que si esta en el _historial lo incluya; ! -> NEGACION, por lo indicamos que SI NO ESTA, LO INCLUYA
    if (!this._historial.includes(query)) {

      // "unshift" inserta el valor al inicio del historia 
      this._historial.unshift(query)

      // De esta manera guardamos en el localStorage, 'historial' -> nombre clave; JSON.stringify(this._historial) -> es basicamente lo que hay en _historial
      // JSON.stringify() -> transforma a String _historial, ya que este es un String[] (arreglo de Strings) 
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    // Indicamos que _historial no tendra mas de 3 elementos (en este caso, los ultimos ingresados)
    this._historial = this._historial.splice(0, 10);

    // De esta manera, establecemos los tipos para consumir la API con los parametros que esta nos indica
    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '10').set('q', query);

    // <SearchGifsResponse> indicamos el tipo de respuesta que esta obteniendo con el get, esto con la data mapeada con https://app.quicktype.io/
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {

        this.resultados = resp.data;

        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {
      console.log(resp);
    });
  }
}

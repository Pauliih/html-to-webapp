import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoPagina } from '../intefaces/info-pagina.inteface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      console.log(resp.email);
      this.cargada = true;
      this.info = resp;
    });
  }
}

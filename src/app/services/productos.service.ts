import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intefaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
    setTimeout(() => {
      this.cargando = false;
    }, 300);
  }

  private cargarProductos() {
     // Leer JSON de firebase
     this.http.get('https://angular-html-1989.firebaseio.com/productos_idx.json')
     .subscribe( (resp: Producto[]) => {
       this.productos = resp;
     });
  }
}

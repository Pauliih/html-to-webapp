import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intefaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
    setTimeout(() => {
      this.cargando = false;
    }, 300);
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
       // Leer JSON de firebase
     this.http.get('https://angular-html-1989.firebaseio.com/productos_idx.json')
     .subscribe( (resp: Producto[]) => {
       this.productos = resp;
       resolve();
     });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-1989.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      // Cargar productos
      this.cargarProductos().then( () => {
        // Ejecutar código después de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // Aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productoFiltrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach ( prod => {
      const tituloLower = prod.titulo.toLowerCase();
       if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
       }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../intefaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  idProducto: string;

  constructor(  private route: ActivatedRoute,
                public _producto: ProductosService ) { }

  ngOnInit() {
    // leer parametros
    this.route.params.subscribe(parametros => {
      // console.log('parametros', parametros['id']);
      this.idProducto = parametros['id'];
      this._producto.getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          this.producto = producto;
          console.log('producto', producto);
        });
    });
  }

}

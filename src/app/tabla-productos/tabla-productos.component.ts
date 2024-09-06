import { Component } from '@angular/core';
import { ProductoService } from '../producto.service'; // Asegúrate de que el servicio esté importado
import * as XLSX from 'xlsx'; // Importar el módulo para trabajar con archivos Excel

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {
  productos: any[] = []; // Arreglo para almacenar los productos

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.obtenerProductos(); // Obtener productos del servicio
  }

  exportarAExcel() {
    // Crear una hoja de trabajo (worksheet) a partir de los productos
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.productos);

    // Crear un libro de trabajo (workbook) que contenga la hoja
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Productos');

    // Exportar el libro de trabajo a un archivo Excel
    XLSX.writeFile(wb, 'productos.xlsx');
  }
}

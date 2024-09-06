import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: any[] = [];

  // Agregar producto al array
  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  // Obtener todos los productos
  obtenerProductos() {
    return this.productos;
  }

  // Exportar los productos a un archivo Excel
  exportarProductosAExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.productos);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Productos': worksheet },
      SheetNames: ['Productos']
    };
    XLSX.writeFile(workbook, 'productos.xlsx');
  }
}

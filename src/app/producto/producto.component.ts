import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  constructor(private productoService: ProductoService) {}

  guardarProducto(form: any) {
    const nuevoProducto = {
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      precio: form.value.precio,
      categoria: form.value.categoria,
      imagen: form.value.imagen
    };

    this.productoService.agregarProducto(nuevoProducto);

    // Mostrar la alerta de éxito
    Swal.fire({
      icon: 'success',
      title: 'Producto Guardado',
      text: 'El producto ha sido guardado exitosamente!',
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });

    // Limpiar el formulario
    form.reset();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        // Procesar los datos del archivo y agregarlos al servicio
        json.forEach((producto: any) => {
          this.productoService.agregarProducto(producto);
        });

        // Mostrar la alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Productos Cargados',
          text: 'Los productos han sido cargados exitosamente desde el archivo Excel!',
          timer: 2000,
          showConfirmButton: false,
          toast: true,
          position: 'top-end'
        });
      };
      reader.readAsArrayBuffer(file);
    }
  }
}

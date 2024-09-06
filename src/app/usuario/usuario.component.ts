import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  constructor(private usuarioService: UsuarioService) {}

  guardarUsuario(form: any) {
    const nuevoUsuario = {
      nombre: form.value.nombre,
      email: form.value.email,
      rol: form.value.rol
    };

    this.usuarioService.agregarUsuario(nuevoUsuario);

    // Mostrar la alerta de éxito
    Swal.fire({
      icon: 'success',
      title: 'Usuario Guardado',
      text: 'El usuario ha sido guardado exitosamente!',
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
        json.forEach((usuario: any) => {
          this.usuarioService.agregarUsuario(usuario);
        });

        // Mostrar la alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Usuarios Cargados',
          text: 'Los usuarios han sido cargados exitosamente desde el archivo Excel!',
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

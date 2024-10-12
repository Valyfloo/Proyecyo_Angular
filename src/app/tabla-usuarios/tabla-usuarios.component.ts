import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service'; // Importa el servicio de usuarios
import * as XLSX from 'xlsx'; // Importar el módulo para trabajar con archivos Excel

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  usuarios: any[] = []; // Arreglo para almacenar los usuarios
  usuarioEditado: any = {}; // Objeto para almacenar el usuario que se va a editar
  indexEditado: number | null = null; // Índice del usuario que se va a editar

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.obtenerUsuarios(); // Obtener usuarios del servicio
  }

  exportarAExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');
    XLSX.writeFile(wb, 'usuarios.xlsx');
  }

  eliminarUsuario(index: number) {
    this.usuarioService.eliminarUsuario(index);
    this.usuarios = this.usuarioService.obtenerUsuarios(); // Actualiza la lista de usuarios
  }

  iniciarEdicion(usuario: any, index: number) {
    this.usuarioEditado = { ...usuario }; // Copia el usuario a editar
    this.indexEditado = index; // Guarda el índice del usuario a editar
  }

  guardarCambios() {
    if (this.indexEditado !== null) {
      this.usuarioService.modificarUsuario(this.indexEditado, this.usuarioEditado);
      this.usuarios = this.usuarioService.obtenerUsuarios(); // Actualiza la lista de usuarios
      this.usuarioEditado = {}; // Resetea el objeto de usuario editado
      this.indexEditado = null; // Resetea el índice editado
    }
  }
}

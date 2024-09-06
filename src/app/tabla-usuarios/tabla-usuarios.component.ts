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

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.obtenerUsuarios(); // Obtener usuarios del servicio
  }

  exportarAExcel() {
    // Crear una hoja de trabajo (worksheet) a partir de los usuarios
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);

    // Crear un libro de trabajo (workbook) que contenga la hoja
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');

    // Exportar el libro de trabajo a un archivo Excel
    XLSX.writeFile(wb, 'usuarios.xlsx');
  }
}

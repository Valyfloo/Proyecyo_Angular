import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: any[] = []; // Usa any si no defines una interfaz

  agregarUsuario(usuario: any) {
    this.usuarios.push(usuario);
  }

  obtenerUsuarios() {
    return this.usuarios;
  }
}

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

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1); // Elimina el usuario en la posición indicada
  }

  modificarUsuario(index: number, usuario: any) {
    this.usuarios[index] = usuario; // Modifica el usuario en la posición indicada
  }
}

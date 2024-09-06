import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule si usas formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { ProductoService } from './producto.service'; // Importa el servicio de productos
import { UsuarioService } from './usuario.service'; // Importa el servicio de usuarios

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    UsuarioComponent,
    TablaUsuariosComponent,
    TablaProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductoService, UsuarioService], // Registra los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }

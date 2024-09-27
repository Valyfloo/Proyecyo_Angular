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
import { UsuarioService } from './usuario.service';
import { PersonajesComponent } from './personajes/personajes.component'; // Importa el servicio de usuarios
import { HttpClientModule } from '@angular/common/http';
import { EpisodiosComponent } from './episodios/episodios.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    UsuarioComponent,
    TablaUsuariosComponent,
    TablaProductosComponent,
    PersonajesComponent,
    EpisodiosComponent,
    DetallePersonajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductoService, UsuarioService], // Registra los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';  // Asegúrate de importar este componente

const routes: Routes = [
  { path: "usuarios", component: UsuarioComponent },
  { path: "productos", component: ProductoComponent },
  { path: "tabla-productos", component: TablaProductosComponent },
  { path: "tabla-usuarios", component: TablaUsuariosComponent },
  { path: "personajes", component: PersonajesComponent },
  { path: "episodios", component: EpisodiosComponent },
  { path: "detalle-personaje/:id", component: DetallePersonajeComponent },  // Ruta para el detalle del personaje
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

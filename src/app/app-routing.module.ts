import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [

  {path: "usuarios", component: UsuarioComponent},
  {path: "productos", component: ProductoComponent},
  {path: "tabla-productos", component: TablaProductosComponent},
  {path: "tabla-usuarios", component: TablaUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

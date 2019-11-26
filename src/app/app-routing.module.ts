import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilEquipoComponent } from './components/perfil-equipo/perfil-equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JugadorComponent } from './components/jugador/jugador.component';

const routes: Routes = [
  { path: '' , component : InicioComponent },
  { path: 'equipo/:id' , component : PerfilEquipoComponent },
  { path: 'jugador/:id' , component : JugadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

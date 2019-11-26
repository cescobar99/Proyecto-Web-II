import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { EquiposService } from './equipos.service';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { PerfilEquipoComponent } from './components/perfil-equipo/perfil-equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { AppRoutingModule } from './app-routing.module';
import { TablaPosicionComponent } from './components/tabla-posicion/tabla-posicion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EquiposComponent,
    PerfilEquipoComponent,
    InicioComponent,
    JugadorComponent,
    TablaPosicionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EquiposService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

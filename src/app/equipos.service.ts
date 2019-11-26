import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor( protected http: HttpClient) { }

  getEquipos() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }
  getEquiposId(id) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + id);
  }
  getJugadorEquipoId(id) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=' + id);
  }
  getJugadorId(id) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=' + id);
  }
  getSigEventoEquipoId(id) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=' + id);
  }
  getUltiEventoEquipoId(id) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=' + id);
  }
  getTablaPosicion() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920');
  }
  getTodosLosEventos(){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920`)
  }
}


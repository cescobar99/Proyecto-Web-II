import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../equipos.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-perfil-equipo',
  templateUrl: './perfil-equipo.component.html',
  styleUrls: ['./perfil-equipo.component.css']
})
export class PerfilEquipoComponent implements OnInit {
  jugadores: any[] = [];
  equipos: any[] = [];
  eventos: any[] = [];
  ultieventos: any[] = [];
  todosloseventospasados: any[] = [];
  todosloseventosfuturos: any[] = [];

  constructor(
    private datePipe: DatePipe,
    private equipoService: EquiposService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.equipoService.getEquiposId(params.id)
          .subscribe(
            (datos) => {
              this.equipos = datos['teams'];
            },
            (error) => {
              console.error(error);
            }
          );
        this.equipoService.getJugadorEquipoId(params.id)
          .subscribe(
            (datos) => {
              this.jugadores = datos['player'];
            },
            (error) => {
              console.error(error);
            }
          );
        this.equipoService.getUltiEventoEquipoId(params.id).subscribe(
          (datos) => {
            this.ultieventos = datos['results'];
          },
          (error) => {
            console.log(error);
          }
        );
        this.equipoService.getSigEventoEquipoId(params.id).subscribe(
          (datos) => {
            this.eventos = datos['events'];
          },
          (error) => {
            console.log(error);
          }
        );

        this.equipoService.getTodosLosEventos().subscribe(
          (datos) => {
            for (let i = 0; i < datos["events"].length; i++) {
              const temp = datos["events"][i];
              if (temp.idHomeTeam==params.id || temp.idAwayTeam==params.id) {
                if (temp.dateEvent>=this.datePipe.transform(new Date, "yyyy-MM-dd")) {
                  this.todosloseventosfuturos.push(temp)
                }else{
                  this.todosloseventospasados.push(temp)
                }
              }
            }
            console.log(this.todosloseventospasados)
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }
}

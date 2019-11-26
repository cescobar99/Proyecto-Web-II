import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../equipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugador: any[] = [];
  constructor(
    private teamService: EquiposService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.teamService.getJugadorId(params.id).subscribe(
          (data) => {
            this.jugador = data['players'];
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }
}

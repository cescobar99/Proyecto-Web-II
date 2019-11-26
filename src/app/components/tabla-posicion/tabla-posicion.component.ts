import { Component, OnInit , Input } from '@angular/core';
import { EquiposService } from '../../equipos.service';

@Component ({
  selector: 'app-tabla-posicion',
  templateUrl: './tabla-posicion.component.html',
  styleUrls: ['./tabla-posicion.component.css']
})
export class TablaPosicionComponent implements OnInit {
  @Input() idTeam: string;
  table: any[] = [];

  constructor(private teamService: EquiposService) { }

  ngOnInit() {
    this.teamService.getTablaPosicion()
      .subscribe(
        (data) => {
          // tslint:disable-next-line: no-string-literal
          this.table = data['table'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

}

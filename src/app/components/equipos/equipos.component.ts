import { Component, OnInit } from '@angular/core';
import { EquiposService} from '../../equipos.service';

@Component ({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: any[] = [];
  equiposFav = JSON.parse(localStorage.getItem("equiposFav"));
  constructor(protected teamService: EquiposService) { }

  ngOnInit() {
    this.teamService.getEquipos()
      .subscribe(
        (datos) => {
          this.equipos = datos['teams'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

  agregaAFavoritos(equipo){
    this.teamService.getEquiposId(equipo).subscribe((datos) => {
      if (this.equiposFav==null || this.equiposFav=="") {
        this.equiposFav=[]
      }else{
        this.equiposFav = JSON.parse(localStorage.getItem("equiposFav"));
      }
      for (let index = 0; index < this.equiposFav.length; index++) {
        if (this.equiposFav[index].idTeam==equipo) {
          return
        }  
      }
      this.equiposFav.push(datos['teams'][0]);
      localStorage.setItem("equiposFav",JSON.stringify(this.equiposFav))
    });
  }

}

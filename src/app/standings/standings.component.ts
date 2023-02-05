import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  constructor(private route: RouterModule) { }

  standings: any = [];
  goleadores: any = [];
  fecha: any = [];

  ngOnInit(): void {
    this.premierLeagueGhana();
    console.log(this.standings);
  }

  fechaDeHoy() {
    const today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var fecha = year + '-' + month + '-' + day;
    return fecha;
  }

  premierLeagueGhana() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    //var today = this.fechaDeHoy();
    fetch(`https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=177&APIkey=${key}`)
      .then(response => response.json())
      .then((equipos) => {
        console.log(equipos);
        for (let i = 0; i < equipos.result.total.length; i++) {
          this.standings.push({
            standing_place: equipos.result.total[i].standing_place, standing_team: equipos.result.total[i].standing_team,
            standing_PTS: equipos.result.total[i].standing_PTS, standing_W: equipos.result.total[i].standing_W,
            standing_L: equipos.result.total[i].standing_L, standing_D: equipos.result.total[i].standing_D,
            standing_F: equipos.result.total[i].standing_F, standing_P: equipos.result.total[i].standing_P,
            standing_A: equipos.result.total[i].standing_A
          });
        }
      });
      fetch(`https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=207&APIkey=${key}`)
        .then(response => response.json())
        .then((equipos) => {
          console.log("jugadores", equipos);
          for (let i = 0; i < equipos.result.length; i++) {
            this.goleadores.push({
              player_place: equipos.result[i].player_place, player_name: equipos.result[i].player_name,
              team_name: equipos.result[i].team_name, goals: equipos.result[i].goals,
              assists: equipos.result[i].assists, penalty_goals: equipos.result[i].penalty_goals,
            });
          }
          console.log("arg golead", equipos);
        });

    fetch(`https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${key}`)
      .then(response => response.json())
      .then((equipos) => {
        console.log("ligas", equipos);
      });
  }


}


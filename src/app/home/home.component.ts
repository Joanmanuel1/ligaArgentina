import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private route: RouterModule) { }
  // B METROPOLITANA league_key: 40
  // 1° division league_key: 44
  ligas: any = [];

  result: any = [];
  cArgentina: any = [];
  fecha: any = [];

  ngOnInit(): void {
    this.premierLeagueGhana();
    console.log(this.cArgentina);
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
    var today = this.fechaDeHoy();
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${today}&to=${today}&timezone=America/Buenos_Aires&leagueId=177`)
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-02-01&to=2023-02-01&timezone=America/Buenos_Aires&leagueId=515`)
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.result.length; i++) {
          this.cArgentina.push({
            home_team_logo: equipos.result[i].home_team_logo, away_team_logo: equipos.result[i].away_team_logo,
            event_away_team: equipos.result[i].event_away_team, event_home_team: equipos.result[i].event_home_team,
            event_final_result: equipos.result[i].event_final_result,
            event_status: equipos.result[i].event_status, event_time: equipos.result[i].event_time, goalscorers: equipos.result[i].goalscorers
          });
          equipos.result[i].goalscorers.forEach((goalscorers: { id: any; time: any; home_scorer: any; away_scorer: any }) =>
            this.cArgentina.concat({ time: goalscorers.time, home_scorer: goalscorers.home_scorer, away_scorer: goalscorers.away_scorer }));
        }
      });
  }

  primeraA() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    var today = this.fechaDeHoy();
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${today}&to=${today}&timezone=America/Buenos_Aires`)
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-2-1&to=2023-2-3&timezone=America/Buenos_Aires`)
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.result.length; i++) {
          this.result.push({
            home_team_logo: equipos.result[i].home_team_logo, away_team_logo: equipos.result[i].away_team_logo,
            event_away_team: equipos.result[i].event_away_team, event_home_team: equipos.result[i].event_home_team,
            event_final_result: equipos.result[i].event_final_result,
            event_status: equipos.result[i].event_status, goalscorers: equipos.result[i].goalscorers
          });
          equipos.result[i].goalscorers.forEach((goalscorers: { id: any; time: any; home_scorer: any; away_scorer: any }) =>
            this.result.concat({ time: goalscorers.time, home_scorer: goalscorers.home_scorer, away_scorer: goalscorers.away_scorer }));
        }
      });
  
  }

}


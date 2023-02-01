import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }
  // B METROPOLITANA league_key: 40
  ligas: any = [];

  result: any = [];
  cArgentina: any = [];

  ngOnInit(): void {
    this.primeraA();
    this.copaArgentina();
  }

  primeraA() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    var fecha = this.fechaDeHoy();
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${fecha}&to=${fecha}&timezone=America/Buenos_Aires&leagueId=44`)
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-01-30&to=2023-01-30&timezone=America/Buenos_Aires&leagueId=44`)
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

  fechaDeHoy() {
    const diaActual = new Date();
    var day = diaActual.getDate();
    var month = diaActual.getMonth() + 1;
    var year = diaActual.getFullYear();
    var fecha = year + '-' + month + '-' + day;
    return fecha;
  }


  copaArgentina() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    var fecha = this.fechaDeHoy();
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${fecha}&to=${fecha}&timezone=America/Buenos_Aires&leagueId=515`)
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-02-01&to=2023-02-01&timezone=America/Buenos_Aires&leagueId=515`)
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

  /*
  copaArgentina() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    var fecha = this.fechaDeHoy();
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${fecha}&to=${fecha}&timezone=America/Buenos_Aires&leagueId=515`)
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-02-01&to=2023-02-01&timezone=America/Buenos_Aires&leagueId=515`)
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.result.length; i++) {
          equipos.result[i].goalscorers.forEach((goalscorers: { id: any; time: any; home_scorer: any; away_scorer: any }) =>
            this.copaArgentinaGoleadores.push({ id: i, time: goalscorers.time, jugadorL: goalscorers.home_scorer, jugadorV: goalscorers.away_scorer }))

          this.copaArgentinaLocales.push(equipos.result[i].event_home_team);
          this.copaArgentinaLocalesLogos.push(equipos.result[i].home_team_logo);
          this.copaArgentinaVisitantesLogos.push(equipos.result[i].away_team_logo);
          this.copaArgentinaVisitantes.push(equipos.result[i].event_away_team);
          this.copaArgentinaResultados.push(equipos.result[i].event_final_result);
          this.copaArgentinaTiempo.push(equipos.result[i].event_status);

        }
      });
  }
  */

}


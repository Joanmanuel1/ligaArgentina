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

  cArgentina: any = [];
  fecha: any = [];
  copaArgentina: any = [];

  ngOnInit(): void {
    this.faCup();
    //this.premierLeagueGhana();
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

  faCup() {
    var today = this.fechaDeHoy();
    fetch(`https://v3.football.api-sports.io/fixtures?league=130&season=2023&from=${today}&to=${today}&timezone=America/Argentina/Buenos_Aires`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        console.log("equipos", equipos)
        for (let i = 0; i < equipos.response.length; i++) {
          this.copaArgentina.push({
            home_name: equipos.response[i].teams.home.name,
            home_logo: equipos.response[i].teams.home.logo,
            away_name: equipos.response[i].teams.away.name,
            away_logo: equipos.response[i].teams.away.logo,
            home_goals:equipos.response[i].goals.home,
            away_goals: equipos.response[i].goals.away,
            date: equipos.response[i].fixture.date,
            time: equipos.response[i].fixture.status.elapsed,
            cup_logo: equipos.response[i].league.logo,
            cup_name: equipos.response[i].league.name,
            round: equipos.response[i].league.round,
          });
        }
      })

      .catch(err => {
        console.log(err);
      });
  }

  fechaDeHoy() {
    const today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var dia;
    var mes;

    if (day < 10 && month < 10) {
      dia = "0" + day;
      mes = "0" + month;
      var fecha = year + '-' + mes + '-' + dia;
      return fecha;
    }
    else if(month < 10) {
      mes = "0" + month;
      var fecha = year + '-' + mes + '-' + day;
      return fecha;
    }

    else if(day < 10){
      dia = "0" + day;
      var fecha = year + '-' + month + '-' + dia;
      return fecha;
    }

    else {
      var fecha = year + '-' + month + '-' + day;
      return fecha;
    }
  }


}


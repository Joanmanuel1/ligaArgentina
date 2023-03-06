import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-primera-b',
  templateUrl: './primera-b.component.html',
  styleUrls: ['./primera-b.component.css']
})
export class PrimeraBComponent implements OnInit {
  constructor(private route: RouterModule) { }

  fixture_b_metropolitana: any = [];
  fecha: any;
  b_metropolitana: any = [];
  b_metropolitana_goleadores: any = [];

  ngOnInit(): void {
    this.fixtureBMetropolitana();
    this.bMetropolitana();
    this.bMetropolitanaGoleadores();
  }

  fixtureBMetropolitana() {
    fetch(`https://v3.football.api-sports.io/fixtures?league=131&season=2023&timezone=America/Argentina/Buenos_Aires`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.response.length; i++) {
          this.fixture_b_metropolitana.push({
            date: equipos.response[i].fixture.date.split('T'),
            start: equipos.response[i].fixture.status.long,
            start_time: equipos.response[i].fixture.status.elapsed,
            round: equipos.response[i].league.round,
            logo: equipos.response[i].league.logo,
            home_name: equipos.response[i].teams.home.name,
            home_logo: equipos.response[i].teams.home.logo,
            away_name: equipos.response[i].teams.away.name,
            away_logo: equipos.response[i].teams.away.logo,
            home_goals: equipos.response[i].goals.home,
            away_goals: equipos.response[i].goals.away,
          });
        }
        this.ordenar();
        this.traerFechaEnJuego();

      })
      .catch(err => {
        console.log(err);
      });
  }

  bMetropolitana() {
    fetch("https://v3.football.api-sports.io/standings?league=131&season=2023", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.response[0].league.standings[0].length; i++) {
          this.b_metropolitana.push({
            name: equipos.response[0].league.standings[0][i].team.name,
            logo: equipos.response[0].league.standings[0][i].team.logo,
            points: equipos.response[0].league.standings[0][i].points,
            win: equipos.response[0].league.standings[0][i].all.win,
            draw: equipos.response[0].league.standings[0][i].all.draw,
            lose: equipos.response[0].league.standings[0][i].all.lose,
            played: equipos.response[0].league.standings[0][i].all.played,
            against: equipos.response[0].league.standings[0][i].all.goals.against,
            for: equipos.response[0].league.standings[0][i].all.goals.for,
            league_logo: equipos.response[0].league.logo,
            form: equipos.response[0].league.standings[0][i].form.split('', 3),
            goalsDiff: equipos.response[0].league.standings[0][i].goalsDiff,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  bMetropolitanaGoleadores() {
    fetch("https://v3.football.api-sports.io/players/topscorers?league=131&season=2023", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < 8; i++) {
          this.b_metropolitana_goleadores.push({
            name: equipos.response[i].player.name,
            logo: equipos.response[i].statistics[0].team.logo,
            goals: equipos.response[i].statistics[0].goals.total,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  ordenar() {
    this.fixture_b_metropolitana.sort((x: any, y: any) => {
      x = new Date(x.date),
        y = new Date(y.date);
      return x - y;
    });
  }

  traerFechaEnJuego() {
    for (let i = 0; i < this.fixture_b_metropolitana.length; i++) {
      var hoy = this.fechaDeHoy();
      if (this.fixture_b_metropolitana[i].date > hoy) {
        var numeroFecha = this.fixture_b_metropolitana[i].round.split('- ')
        this.fecha = numeroFecha[1]
        return numeroFecha;
      }
    }
  }

  fechaAnterior() {
    this.fecha = parseInt(this.fecha) - 1;
  }

  fechaSiguiente() {
    this.fecha = parseInt(this.fecha) + 1;
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
    else if (month < 10) {
      mes = "0" + month;
      var fecha = year + '-' + mes + '-' + day;
      return fecha;
    }

    else if (day < 10) {
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

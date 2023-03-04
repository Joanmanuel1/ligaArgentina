import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primera-nacional',
  templateUrl: './primera-nacional.component.html',
  styleUrls: ['./primera-nacional.component.css']
})
export class PrimeraNacionalComponent implements OnInit {

  constructor() { }

  fixture_b_nacional_grupo_a: any = [];
  fixture_b_nacional_grupo_b: any = [];
  fecha_grupo_a: any;
  fecha_grupo_b: any;
  b_nacional_grupo_a: any = [];
  b_nacional_grupo_b: any = [];

  ngOnInit(): void {
    this.fixtureBNacional();
    this.bNacional();
  }

  fixtureBNacional() {
    fetch(`https://v3.football.api-sports.io/fixtures?league=129&season=2023&timezone=America/Argentina/Buenos_Aires`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.response.length; i++) {
          if (equipos.response[i].league.round.startsWith('Group A - ')) {
            this.fixture_b_nacional_grupo_a.push({
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
          else{
            this.fixture_b_nacional_grupo_b.push({
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
        }
        this.ordenarZonaA();
        this.traerfechaEnJuegoZonaA();
        this.ordenarZonaB();
        this.traerfechaEnJuegoZonaB();
      })
      .catch(err => {
        console.log(err);
      });
  }

  fechaAnteriorGrupoA() {
    this.fecha_grupo_a = parseInt(this.fecha_grupo_a) - 1;
  }

  fechaSiguienteGrupoA() {
    this.fecha_grupo_a = parseInt(this.fecha_grupo_a) + 1;
  }

  fechaAnteriorGrupoB() {
    this.fecha_grupo_b = parseInt(this.fecha_grupo_b) - 1;
  }

  fechaSiguienteGrupoB() {
    this.fecha_grupo_b = parseInt(this.fecha_grupo_b) + 1;
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

  bNacional() {
    fetch("https://v3.football.api-sports.io/standings?league=129&season=2023", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.response[0].league.standings[0].length; i++) {
          this.b_nacional_grupo_b.push({
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
        for (let i = 0; i < equipos.response[0].league.standings[1].length; i++) {
          this.b_nacional_grupo_a.push({
            name: equipos.response[0].league.standings[1][i].team.name,
            logo: equipos.response[0].league.standings[1][i].team.logo,
            points: equipos.response[0].league.standings[1][i].points,
            win: equipos.response[0].league.standings[1][i].all.win,
            draw: equipos.response[0].league.standings[1][i].all.draw,
            lose: equipos.response[0].league.standings[1][i].all.lose,
            played: equipos.response[0].league.standings[1][i].all.played,
            against: equipos.response[0].league.standings[1][i].all.goals.against,
            for: equipos.response[0].league.standings[1][i].all.goals.for,
            league_logo: equipos.response[0].league.logo,
            form: equipos.response[0].league.standings[1][i].form.split('', 3),
            goalsDiff: equipos.response[0].league.standings[1][i].goalsDiff,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


  traerfechaEnJuegoZonaA() {
    for (let i = 0; i < this.fixture_b_nacional_grupo_a.length; i++) {
      var hoy = this.fechaDeHoy();
      if (this.fixture_b_nacional_grupo_a[i].date > hoy) {
        var numeroFecha = this.fixture_b_nacional_grupo_a[i].round.split('- ')
        this.fecha_grupo_a = numeroFecha[1]
        return numeroFecha;
      }
    }
  }

  traerfechaEnJuegoZonaB() {
    for (let i = 0; i < this.fixture_b_nacional_grupo_b.length; i++) {
      var hoy = this.fechaDeHoy();
      if (this.fixture_b_nacional_grupo_b[i].date > hoy) {
        var numeroFecha = this.fixture_b_nacional_grupo_b[i].round.split('- ')
        this.fecha_grupo_b = numeroFecha[1]
        return numeroFecha;
      }
    }
  }

  ordenarZonaA() {
    this.fixture_b_nacional_grupo_a.sort((x: any, y: any) => {
      x = new Date(x.date),
        y = new Date(y.date);
      return x - y;
    });
  }
  ordenarZonaB() {
    this.fixture_b_nacional_grupo_b.sort((x: any, y: any) => {
      x = new Date(x.date),
        y = new Date(y.date);
      return x - y;
    });
  }

}
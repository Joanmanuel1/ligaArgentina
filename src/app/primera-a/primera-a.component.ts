import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-primera-a',
  templateUrl: './primera-a.component.html',
  styleUrls: ['./primera-a.component.css']
})
export class PrimeraAComponent implements OnInit {
  fecha: any = 2;
  primera_a: any = [];
  fixture_primera_a: any = [];

  constructor(private route: RouterModule) { }

  ngOnInit(): void {
    this.primeraA();
    this.fixturePrimeraA();
  }

  primeraA() {
    fetch("https://v3.football.api-sports.io/standings?league=128&season=2023", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        console.log("eq", equipos);
        for (let i = 0; i < equipos.response[0].league.standings[1].length; i++) {
          this.primera_a.push({
            name: equipos.response[0].league.standings[1][i].team.name,
            logo: equipos.response[0].league.standings[1][i].team.logo,
            points: equipos.response[0].league.standings[1][i].points,
            win: equipos.response[0].league.standings[1][i].all.win,
            draw: equipos.response[0].league.standings[1][i].all.draw,
            lose: equipos.response[0].league.standings[1][i].all.lose,
            against: equipos.response[0].league.standings[1][i].all.goals.against,
            for: equipos.response[0].league.standings[1][i].all.goals.for,
            form: equipos.response[0].league.standings[1][i].form.split('',3),
            goalsDiff: equipos.response[0].league.standings[1][i].goalsDiff,
          });
        }
        console.log("Tabla", this.primera_a);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fixturePrimeraA() {
    fetch(`https://v3.football.api-sports.io/fixtures?league=128&season=2023&timezone=America/Argentina/Buenos_Aires`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
        console.log("eq", equipos);
        for (let i = 0; i < equipos.response.length; i++) {
          this.fixture_primera_a.push({
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
        this.fixture_primera_a.sort((x: any, y: any) => {
          x = new Date(x.date),
            y = new Date(y.date);
          return x - y;
        });

        console.log("fixture", this.fixture_primera_a);

        for (let i = 0; i < this.fixture_primera_a.length; i++) {
          var hoy = this.fechaDeHoy();
          if (this.fixture_primera_a[i].date > hoy) {
            var numeroFecha = this.fixture_primera_a[i].round.split('- ')
            this.fecha = numeroFecha[1]
            console.log("fecha asignada",this.fecha);
            console.log("numero fgecha",numeroFecha);
            return numeroFecha;
          }
        }


      })
      .catch(err => {
        console.log(err);
      });
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

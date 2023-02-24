import { Component, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private route: RouterModule) { }

  b_metropolitana: any = [];
  primera_a: any = [];
  goles: any = [];
  ayer: any = [];
  hoy: any = [];
  manana: any = [];

  ngOnInit(): void {
    this.bMetropolitana();
    this.primeraA();
    this.ayer = this.fechaDeAyer();
    this.hoy = this.fechaDeHoy();
    this.manana = this.fechaDeMañana();
  }

  bMetropolitana() {
    var ayer = this.fechaDeAyer();
    var manana = this.fechaDeMañana();
    fetch(`https://v3.football.api-sports.io/fixtures?league=131&season=2023&from=${ayer}&to=${manana}&timezone=America/Argentina/Buenos_Aires`, {
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
          this.b_metropolitana.push({
            home_id: equipos.response[i].teams.home.id,
            home_name: equipos.response[i].teams.home.name,
            home_logo: equipos.response[i].teams.home.logo,
            away_id: equipos.response[i].teams.away.id,
            away_name: equipos.response[i].teams.away.name,
            away_logo: equipos.response[i].teams.away.logo,
            home_goals:equipos.response[i].goals.home,
            away_goals: equipos.response[i].goals.away,
            date: equipos.response[i].fixture.date.split('T'),
            time: equipos.response[i].fixture.status.elapsed,
            fixture_id: equipos.response[i].fixture.id,
            stadium: equipos.response[i].fixture.venue.name,
            cup_logo: equipos.response[i].league.logo,
            cup_name: equipos.response[i].league.name,
            round: equipos.response[i].league.round,
            season: equipos.response[i].league.season,

          });
        }
        console.log("lista", this.b_metropolitana)
      })

      .catch(err => {
        console.log(err);
      });
  }

  primeraA() {
    var ayer = this.fechaDeAyer();
    var manana = this.fechaDeMañana();
    fetch(`https://v3.football.api-sports.io/fixtures?league=128&season=2023&from=${ayer}&to=${manana}&timezone=America/Argentina/Buenos_Aires`, {
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
          this.primera_a.push({
            home_id: equipos.response[i].teams.home.id,
            home_name: equipos.response[i].teams.home.name,
            home_logo: equipos.response[i].teams.home.logo,
            away_id: equipos.response[i].teams.away.id,
            away_name: equipos.response[i].teams.away.name,
            away_logo: equipos.response[i].teams.away.logo,
            home_goals:equipos.response[i].goals.home,
            away_goals: equipos.response[i].goals.away,
            date: equipos.response[i].fixture.date.split('T'),
            time: equipos.response[i].fixture.status.elapsed,
            fixture_id: equipos.response[i].fixture.id,
            stadium: equipos.response[i].fixture.venue.name,
            cup_logo: equipos.response[i].league.logo,
            cup_name: equipos.response[i].league.name,
            round: equipos.response[i].league.round,
            season: equipos.response[i].league.season,

          });
        }
        console.log("lista", this.primera_a)
      })

      .catch(err => {
        console.log(err);
      });
  }

  


  matchEvent(id:any){
    fetch(`https://v3.football.api-sports.io/fixtures/events?fixture=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((match) => {
        console.log("Partido", match)
        for (let i = 0; i < match.response.length; i++) {
          this.goles.push({
            fixture_id:id,
            time: match.response[i].time.elapsed,
            extra: match.response[i].time.extra,
            id: match.response[i].team.id,
            team_name: match.response[i].team.name,
            team_logo: match.response[i].team.logo,
            player: match.response[i].player.name,
            type: match.response[i].player.type,
            detail: match.response[i].player.detail,
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
  fechaDeAyer() {
    const yesterday = new Date();
    var day = yesterday.getDate() - 1;
    var month = yesterday.getMonth() + 1;
    var year = yesterday.getFullYear();
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

  fechaDeMañana() {
    const tomorrow = new Date();
    var day = tomorrow.getDate() + 1;
    var month = tomorrow.getMonth() + 1;
    var year = tomorrow.getFullYear();
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


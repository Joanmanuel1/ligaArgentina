import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private route: RouterModule) { }

  b_metropolitana: any = [];
  ayer: any = [];
  hoy: any = [];
  manana: any = [];

  ngOnInit(): void {
    this.bMetropolitana();
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
            home_name: equipos.response[i].teams.home.name,
            home_logo: equipos.response[i].teams.home.logo,
            away_name: equipos.response[i].teams.away.name,
            away_logo: equipos.response[i].teams.away.logo,
            home_goals:equipos.response[i].goals.home,
            away_goals: equipos.response[i].goals.away,
            date: equipos.response[i].fixture.date.split('T'),
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


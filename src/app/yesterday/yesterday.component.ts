import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-yesterday',
  templateUrl: './yesterday.component.html',
  styleUrls: ['./yesterday.component.css']
})
export class YesterdayComponent implements OnInit {

  constructor(private route: RouterModule) { }

  b_metropolitana: any = [];

  ngOnInit(): void {
    this.bMetropolitana();
  }

  bMetropolitana() {
    var yesterday = this.fechaDeAyer();
    fetch(`https://v3.football.api-sports.io/fixtures?league=131&season=2023&from=${yesterday}&to=${yesterday}&timezone=America/Argentina/Buenos_Aires`, {
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

}
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  constructor(private route: RouterModule) { }

  fixture_b_metropolitana: any = [];
  fecha = 1;
  ngOnInit(): void {
    this.fixtureBMetropolitana();
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
        console.log("eq", equipos);
        for (let i = 0; i < equipos.response.length; i++) {
          this.fixture_b_metropolitana.push({
            date: equipos.response[i].fixture.date,
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

        this.fixture_b_metropolitana.sort((x: any, y: any) => {
          x = new Date(x.date),
            y = new Date(y.date);
          return x - y;
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fechaAnterior() {
    this.fecha = this.fecha - 1;
  }

  fechaSiguiente() {
    this.fecha = this.fecha + 1;
  }

}

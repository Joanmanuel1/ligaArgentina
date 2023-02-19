import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-primera-a',
  templateUrl: './primera-a.component.html',
  styleUrls: ['./primera-a.component.css']
})
export class PrimeraAComponent implements OnInit {
  fecha: any = [];
  primera_a: any = [];

   constructor(private route: RouterModule) { }

   ngOnInit(): void {
    this.primeraA();
  }

  fechaDeHoy() {
    const today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var fecha = year + '-' + month + '-' + day;
    return fecha;
  }


  primeraA() {
    // Para la B Metro el id es el 131 y la posicion de standings es [0]
    fetch("https://v3.football.api-sports.io/standings?league=128&season=2023", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((equipos) => {
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
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


}

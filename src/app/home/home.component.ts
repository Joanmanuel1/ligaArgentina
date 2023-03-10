import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { type } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private route: RouterModule) { }

  primera_ayer: any = [];
  primera_hoy: any = [];
  primera_manana: any = [];
  nacional_ayer: any = [];
  nacional_hoy: any = [];
  nacional_manana: any = [];
  metropolitana_ayer: any = [];
  metropolitana_hoy: any = [];
  metropolitana_manana: any = [];
  copa_argentina_ayer: any = [];
  copa_argentina_hoy: any = [];
  copa_argentina_manana: any = [];

  goles: any = [];
  tarjetas: any = [];
  cambios: any = [];

  ayer: any = [];
  hoy: any = [];
  manana: any = [];
  fecha: any = [];

  ngOnInit(): void {
    this.primeraA();
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
            var dia = equipos.response[i].fixture.date.split('T');
            if(dia[0] == ayer ){
              this.metropolitana_ayer.push({
                home_id: equipos.response[i].teams.home.id,
                home_name: equipos.response[i].teams.home.name,
                home_logo: equipos.response[i].teams.home.logo,
                away_id: equipos.response[i].teams.away.id,
                away_name: equipos.response[i].teams.away.name,
                away_logo: equipos.response[i].teams.away.logo,
                home_goals: equipos.response[i].goals.home,
                away_goals: equipos.response[i].goals.away,
                date: equipos.response[i].fixture.date.split('T'),
                time: equipos.response[i].fixture.status.elapsed,
                status: equipos.response[i].fixture.status.long,
                fixture_id: equipos.response[i].fixture.id,
                stadium: equipos.response[i].fixture.venue.name,
                logo: equipos.response[i].league.logo,
                name: equipos.response[i].league.name,
                round: equipos.response[i].league.round.split('- '),
                season: equipos.response[i].league.season,
              });
            }
            else if(dia[0] == manana ){
              this.metropolitana_manana.push({
                home_id: equipos.response[i].teams.home.id,
                home_name: equipos.response[i].teams.home.name,
                home_logo: equipos.response[i].teams.home.logo,
                away_id: equipos.response[i].teams.away.id,
                away_name: equipos.response[i].teams.away.name,
                away_logo: equipos.response[i].teams.away.logo,
                home_goals: equipos.response[i].goals.home,
                away_goals: equipos.response[i].goals.away,
                date: equipos.response[i].fixture.date.split('T'),
                time: equipos.response[i].fixture.status.elapsed,
                status: equipos.response[i].fixture.status.long,
                fixture_id: equipos.response[i].fixture.id,
                stadium: equipos.response[i].fixture.venue.name,
                logo: equipos.response[i].league.logo,
                name: equipos.response[i].league.name,
                round: equipos.response[i].league.round.split('- '),
                season: equipos.response[i].league.season,
              }); 
            }
            else {
              this.metropolitana_hoy.push({
                home_id: equipos.response[i].teams.home.id,
                home_name: equipos.response[i].teams.home.name,
                home_logo: equipos.response[i].teams.home.logo,
                away_id: equipos.response[i].teams.away.id,
                away_name: equipos.response[i].teams.away.name,
                away_logo: equipos.response[i].teams.away.logo,
                home_goals: equipos.response[i].goals.home,
                away_goals: equipos.response[i].goals.away,
                date: equipos.response[i].fixture.date.split('T'),
                time: equipos.response[i].fixture.status.elapsed,
                status: equipos.response[i].fixture.status.long,
                fixture_id: equipos.response[i].fixture.id,
                stadium: equipos.response[i].fixture.venue.name,
                logo: equipos.response[i].league.logo,
                name: equipos.response[i].league.name,
                round: equipos.response[i].league.round.split('- '),
                season: equipos.response[i].league.season,
              }); 
            }
            
          }
          this.ordenarBMetro();
        console.log("b metro", this.metropolitana_ayer);
        console.log("b metro", this.metropolitana_hoy);
        console.log("b metro", this.metropolitana_manana);
      })

      .catch(err => {
        console.log("Error", err);
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
          var dia = equipos.response[i].fixture.date.split('T');
          if(dia[0] == ayer ){
            this.primera_ayer.push({
              home_id: equipos.response[i].teams.home.id,
              home_name: equipos.response[i].teams.home.name,
              home_logo: equipos.response[i].teams.home.logo,
              away_id: equipos.response[i].teams.away.id,
              away_name: equipos.response[i].teams.away.name,
              away_logo: equipos.response[i].teams.away.logo,
              home_goals: equipos.response[i].goals.home,
              away_goals: equipos.response[i].goals.away,
              date: equipos.response[i].fixture.date.split('T'),
              time: equipos.response[i].fixture.status.elapsed,
              status: equipos.response[i].fixture.status.long,
              fixture_id: equipos.response[i].fixture.id,
              stadium: equipos.response[i].fixture.venue.name,
              logo: equipos.response[i].league.logo,
              name: equipos.response[i].league.name,
              round: equipos.response[i].league.round.split('- '),
              season: equipos.response[i].league.season,
            });
          }
          else if(dia[0] == manana ){
            this.primera_manana.push({
              home_id: equipos.response[i].teams.home.id,
              home_name: equipos.response[i].teams.home.name,
              home_logo: equipos.response[i].teams.home.logo,
              away_id: equipos.response[i].teams.away.id,
              away_name: equipos.response[i].teams.away.name,
              away_logo: equipos.response[i].teams.away.logo,
              home_goals: equipos.response[i].goals.home,
              away_goals: equipos.response[i].goals.away,
              date: equipos.response[i].fixture.date.split('T'),
              time: equipos.response[i].fixture.status.elapsed,
              status: equipos.response[i].fixture.status.long,
              fixture_id: equipos.response[i].fixture.id,
              stadium: equipos.response[i].fixture.venue.name,
              logo: equipos.response[i].league.logo,
              name: equipos.response[i].league.name,
              round: equipos.response[i].league.round.split('- '),
              season: equipos.response[i].league.season,
            }); 
          }
          else {
            this.primera_hoy.push({
              home_id: equipos.response[i].teams.home.id,
              home_name: equipos.response[i].teams.home.name,
              home_logo: equipos.response[i].teams.home.logo,
              away_id: equipos.response[i].teams.away.id,
              away_name: equipos.response[i].teams.away.name,
              away_logo: equipos.response[i].teams.away.logo,
              home_goals: equipos.response[i].goals.home,
              away_goals: equipos.response[i].goals.away,
              date: equipos.response[i].fixture.date.split('T'),
              time: equipos.response[i].fixture.status.elapsed,
              status: equipos.response[i].fixture.status.long,
              fixture_id: equipos.response[i].fixture.id,
              stadium: equipos.response[i].fixture.venue.name,
              logo: equipos.response[i].league.logo,
              name: equipos.response[i].league.name,
              round: equipos.response[i].league.round.split('- '),
              season: equipos.response[i].league.season,
            }); 
          }
        }
        this.ordenarPrimeraA();
        console.log("b metro", this.primera_ayer);
        console.log("b metro", this.primera_hoy);
        console.log("b metro", this.primera_manana);
      })

      .catch(err => {
        console.log(err);
      });
  }




  matchEvent(id: any) {
    fetch(`https://v3.football.api-sports.io/fixtures/events?fixture=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2a4d321e462a454968098ab7e12fc3af"
      }
    })
      .then(response => response.json())
      .then((match) => {
        console.log("Partido", match);
        for (let i = 0; i < match.response.length; i++) {
          //push a goles a tarjetas, a sustitucion con un if(si es igual al type)
          if (match.response[i].type == 'Goal') {
            this.goles.push({
              fixture_id: id,
              time: match.response[i].time.elapsed,
              extra: match.response[i].time.extra,
              id: match.response[i].team.id,
              team_name: match.response[i].team.name,
              team_logo: match.response[i].team.logo,
              player: match.response[i].player.name,
              type: match.response[i].type,
              detail: match.response[i].detail,
            });
          }
          else if (match.response[i].type == 'Card') {
            this.tarjetas.push({
              fixture_id: id,
              time: match.response[i].time.elapsed,
              extra: match.response[i].time.extra,
              id: match.response[i].team.id,
              team_name: match.response[i].team.name,
              team_logo: match.response[i].team.logo,
              player: match.response[i].player.name,
              type: match.response[i].type,
              detail: match.response[i].detail,
            });
          }
          else if (match.response[i].type == 'subst') {
            this.cambios.push({
              fixture_id: id,
              time: match.response[i].time.elapsed,
              extra: match.response[i].time.extra,
              id: match.response[i].team.id,
              team_name: match.response[i].team.name,
              team_logo: match.response[i].team.logo,
              player: match.response[i].player.name,
              type: match.response[i].type,
              detail: match.response[i].detail,
            });
          }

          //no se hace el else porque queda el tipo VAR y resta averiguar si existen otros tipos

        }
        console.log("Goless:", this.goles);
        console.log("Tarjetas:", this.tarjetas);
        console.log("Cambios:", this.cambios);
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

  ordenarBMetro() {
    this.metropolitana_ayer.sort((x: any, y: any) => {
      x = new Date(x.date),
        y = new Date(y.date);
      return x - y;
    });
  }

  ordenarPrimeraA() {
    this.primera_ayer.sort((x: any, y: any) => {
      x = new Date(x.date),
        y = new Date(y.date);
      return x - y;
    });
  }

}


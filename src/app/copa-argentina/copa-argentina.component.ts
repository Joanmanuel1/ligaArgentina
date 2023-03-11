import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-copa-argentina',
  templateUrl: './copa-argentina.component.html',
  styleUrls: ['./copa-argentina.component.css']
})
export class CopaArgentinaComponent implements OnInit {

  fecha: any = 1;
  treintaydosavos: any = [];
  dieciseisavos: any = [];
  octavos: any = [];
  cuartos: any = [];
  semifinal: any = [];
  final: any = [];


  constructor(private route: RouterModule) { }

  ngOnInit(): void {
    this.Fixture();
  }


  Fixture() {
    fetch(`https://v3.football.api-sports.io/fixtures?league=130&season=2023&timezone=America/Argentina/Buenos_Aires`, {
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
          if(equipos.response[i].league.round == '1st Round'){
            this.treintaydosavos.push({
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
          else if(equipos.response[i].league.round== 'Round of 32'){
            this.dieciseisavos.push({
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
          else if(equipos.response[i].league.round == 'Round of 16'){
            this.octavos.push({
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
          else if(equipos.response[i].league.round == 'Quarter-finals'){
            this.cuartos.push({
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
          else if(equipos.response[i].league.round == 'Semi-finals'){
            this.semifinal.push({
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
          else if(equipos.response[i].league.round == 'Finals'){
            this.final.push({
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
        this.TraerFechaEnJuego();
        console.log(this.fecha)
        console.log(this.treintaydosavos);
          console.log(this.dieciseisavos);
            console.log( this.octavos);
              console.log( this.cuartos);
                console.log( this.semifinal);
                  console.log( this.final);
      })
      .catch(err => {
        console.log(err);
      });
  }



  TraerFechaEnJuego() {
    for (let i = 0; i < this.treintaydosavos.length; i++) {
      var hoy = this.FechaDeHoy();
      if (this.treintaydosavos[i].date > hoy) {
        this.fecha = this.treintaydosavos[i].round.split('',1)
        return this.fecha;
      }
      
    }

  }

  FechaNumero(numero:string){
    this.fecha = parseInt(numero);
  }

  FechaAnterior() {
    this.fecha = parseInt(this.fecha) - 1;
  }

  FechaSiguiente() {
    this.fecha = parseInt(this.fecha) + 1;
  }

  FechaDeHoy() {
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

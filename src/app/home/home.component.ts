import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // B METROPOLITANA league_key: 40
  ligas: any = [];
  
  // Otras ligas
  locales: any = [];
  visitantes: any = [];
  resultados: any = [];

/* No funciono, pone el array en el indice 1 y el 0 lo deja vacio
  partidos: any = [
    {
      id: 0,
      localNombre: "",
      localLogo: "",
      visitanteNombre: "",
      visitanteLogo: "",
      resultado: "",
      tiempo: "",
    }
  ]

  */
 

  ligaArgentinaLocales: any = [];
  ligaArgentinaVisitantes: any = [];
  ligaArgentinaLocalesLogos: any = [];
  ligaArgentinaVisitantesLogos: any = [];
  ligaArgentinaResultados: any = [];
  ligaArgentinaTiempo: any = [];
  ligaArgentinaGoleadores: any = [
    {
      id: 256, 
      time: "",
      jugadorL: [],
      jugadorV: []
    }
  ];


  copaArgentinaLocales: any = [];
  copaArgentinaVisitantes: any = [];
  copaArgentinaLocalesLogos: any = [];
  copaArgentinaVisitantesLogos: any = [];
  copaArgentinaResultados: any = [];
  copaArgentinaTiempo: any = [];
  copaArgentinaGoleadores: any = [
   {
     id: 256, 
     time: "",
     jugadorL: [],
     jugadorV: []
   }
 ];


  ngOnInit(): void {
    this.primeraA();
    this.copaArgentina();
  }

  primeraA() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    var fecha = this.fechaDeHoy();
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${fecha}&to=${fecha}&timezone=America/Buenos_Aires&leagueId=44`)
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-01-30&to=2023-01-30&timezone=America/Buenos_Aires&leagueId=44`)
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.result.length; i++) {
         equipos.result[i].goalscorers.forEach((goalscorers: { id: any; time: any; home_scorer: any; away_scorer: any }) =>
         this.ligaArgentinaGoleadores.push({ id: i, time: goalscorers.time, jugadorL: goalscorers.home_scorer, jugadorV: goalscorers.away_scorer }));
         this.ligaArgentinaLocales.push(equipos.result[i].event_home_team);
         this.ligaArgentinaLocalesLogos.push(equipos.result[i].home_team_logo);
         this.ligaArgentinaVisitantesLogos.push(equipos.result[i].away_team_logo);
         this.ligaArgentinaVisitantes.push(equipos.result[i].event_away_team);
         this.ligaArgentinaResultados.push(equipos.result[i].event_final_result);
         this.ligaArgentinaTiempo.push(equipos.result[i].event_status);
        }
      });
  }

  fechaDeHoy() {
    const diaActual = new Date();
    var day = diaActual.getDate();
    var month = diaActual.getMonth() + 1;
    var year = diaActual.getFullYear();
    var fecha = year + '-' + month + '-' + day;
    return fecha;
  }


  copaArgentina() {
    const key = "8af162c9850412c02adc53c461b40766844cead095f67960231f658949a3db65";
    //fetch(`https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${key}&timezone=America/Buenos_Aires`)
    fetch(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=2023-02-01&to=2023-02-01&timezone=America/Buenos_Aires&leagueId=515`)
      .then(response => response.json())
      .then((equipos) => {
        for (let i = 0; i < equipos.result.length; i++) {
          equipos.result[i].goalscorers.forEach((goalscorers: { id: any; time: any; home_scorer: any; away_scorer: any }) =>
          this.copaArgentinaGoleadores.push({ id: i, time: goalscorers.time, jugadorL: goalscorers.home_scorer, jugadorV: goalscorers.away_scorer }))
         
          this.copaArgentinaLocales.push(equipos.result[i].event_home_team);
          this.copaArgentinaLocalesLogos.push(equipos.result[i].home_team_logo);
          this.copaArgentinaVisitantesLogos.push(equipos.result[i].away_team_logo);
          this.copaArgentinaVisitantes.push(equipos.result[i].event_away_team);
          this.copaArgentinaResultados.push(equipos.result[i].event_final_result);
          this.copaArgentinaTiempo.push(equipos.result[i].event_status);

        }
      });
  }

}


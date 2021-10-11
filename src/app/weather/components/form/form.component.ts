import { Component, OnInit } from '@angular/core';

import { Estacion } from 'src/app/interfaces/province.interface';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public estacionesAlmeria!: Estacion[]
  public estacionesCadiz!: Estacion[]
  public estacionesCordoba!: Estacion[]
  public estacionesGranada!: Estacion[]
  public estacionesHuelva!: Estacion[]
  public estacionesJaen!: Estacion[]
  public estacionesMalaga!: Estacion[]
  public estacionesSevilla!: Estacion[]



  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getStationAlmeria()
      .subscribe(res => {
        this.estacionesAlmeria = res
      })
    this.weatherService.getStationCadiz()
      .subscribe(res => {
        this.estacionesCadiz = res
      })
    this.weatherService.getStationCordoba()
      .subscribe(res => {
        this.estacionesCordoba = res
      })
    this.weatherService.getStationGranada()
      .subscribe(res => {
        this.estacionesGranada = res
      })
    this.weatherService.getStationHuelva()
      .subscribe(res => {
        this.estacionesHuelva = res
      })
    this.weatherService.getStationJaen()
      .subscribe(res => {
        this.estacionesJaen = res
      })
    this.weatherService.getStationMalaga()
      .subscribe(res => {
        this.estacionesMalaga = res
      })
    this.weatherService.getStationSevilla()
      .subscribe(res => {
        this.estacionesSevilla = res
      })
  }

  getEstacion(event: any){
    console.log(event.target.value)
    console.log(event)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,  } from 'rxjs';
import { Estacion, EstacionData } from './interfaces/province.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = 'https://www.juntadeandalucia.es/agriculturaypesca/ifapa/riaws/'
  public dateYesterday!: Date
  public dateToday!: string

  public stationData!: EstacionData | undefined
  public stationError: boolean = false

  public station!: string[]

  constructor(private http: HttpClient) { }

  get currentDateYesteday(): string{
    this.dateYesterday = new Date()
    let ms = 24 * 60 * 60 * 1000
    let ayer = new Date(this.dateYesterday.getTime() - ms)
    let yesterday = ayer.toISOString().slice(0, -14)
    return yesterday
  }
  get currentDateToday(): string {
    this.dateToday = new Date().toISOString().slice(0, -14)
    return this.dateToday
  }

  getStationAlmeria(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/4`)
  }
  getStationCadiz(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/11`)
  }
  getStationCordoba(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/14`)
  }
  getStationGranada(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/18`)
  }
  getStationHuelva(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/21`)
  }
  getStationJaen(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/23`)
  }
  getStationMalaga(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/29`)
  }
  getStationSevilla(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}estaciones/41`)
  }


  getDataStation(): Observable<EstacionData> {
    return this.http.get<EstacionData>(`${this.baseUrl}datosdiarios/${this.station[0]}/${this.station[1]}/${this.currentDateYesteday}/false`)
  }
}

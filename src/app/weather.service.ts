import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Estacion, Provincia } from './interfaces/province.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = 'https://www.juntadeandalucia.es/agriculturaypesca/ifapa/riaws/'
  public date: Date = new Date()

  constructor(private http: HttpClient) { }

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

  get currentDate(): string{
    this.date = new Date()
    return this.date.toISOString().slice(0, -14)
  }
}

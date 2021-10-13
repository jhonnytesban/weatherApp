import { Component, OnInit } from '@angular/core';

import { EstacionData } from 'src/app/interfaces/province.interface';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-table-station',
  templateUrl: './table-station.component.html',
  styleUrls: ['./table-station.component.css']
})
export class TableStationComponent implements OnInit {

  public date: string = ''

  get stationDataValue(): EstacionData | undefined {
    return this.weatherService.stationData
  }
  get error(): boolean {
    return this.weatherService.stationError
  }
  
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit(): void {
    this.date = this.weatherService.currentDateYesteday
  }

  getDataAnnual() {
    this.weatherService.getDataAnnual()
      .subscribe(res => {
        console.log(res)
      })
  }


}

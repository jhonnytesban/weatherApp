import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { TableStationComponent } from './components/table-station/table-station.component';



@NgModule({
  declarations: [
    FormComponent,
    TableStationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class WeatherModule { }

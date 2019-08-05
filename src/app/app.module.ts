import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SelectComponent } from './select/select.component';
import { ForecastService } from './forecast.service';
import { ChartTempComponent } from './chart-temp/chart-temp.component';
import { TransmitterService } from './transmitter.service';
import { ChartHumComponent } from './chart-hum/chart-hum.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    TopBarComponent,
    SelectComponent,
    ChartTempComponent,
    ChartHumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ForecastService, TransmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

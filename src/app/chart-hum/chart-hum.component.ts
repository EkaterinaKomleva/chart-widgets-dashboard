import { Component, OnInit } from '@angular/core';
import { TransmitterService } from '../transmitter.service';
import {Subscription} from 'rxjs';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-hum',
  templateUrl: './chart-hum.component.html',
  styleUrls: ['./chart-hum.component.css']
})

export class ChartHumComponent implements OnInit {
  params: any;

  constructor(private transmitterService: TransmitterService) { }

  highcharts = {};
  chartOptions = {};

  subscription: Subscription = this.transmitterService.getParams().subscribe(params => {
    this.params = params;
    this.renderChart();
  });

  renderChart() {
    this.highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Средняя дневная температура'
      },
      subtitle: {
        text: 'Source: openweathermap.org'
      },
      xAxis: {
        categories: this.params.hours
      },
      yAxis: {
        title: {
          text: 'Температура °C'
        }
      },
      tooltip: {
        valueSuffix: ' °C'
      },
      series: [
        {
          name: 'Петрозаводск',
          data: this.params.humidity as Highcharts.SeriesLineDataOptions
        }
      ]
    };
  }

  ngOnInit() {
  }

}

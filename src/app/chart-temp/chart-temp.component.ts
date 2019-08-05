import { Component, /*  Input, */ OnInit, DoCheck, EventEmitter, Output } from '@angular/core';
import { TransmitterService } from '../transmitter.service';
import {Subscription} from 'rxjs';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-temp',
  templateUrl: './chart-temp.component.html',
  styleUrls: ['./chart-temp.component.css']
})

export class ChartTempComponent implements OnInit, DoCheck {
  params: any;

  // subscription: Subscription;
  // @Output() ClearParams = new EventEmitter();

  constructor(private transmitterService: TransmitterService) { }

  highcharts = {};
  chartOptions = {};

  subscription: Subscription = this.transmitterService.getParams().subscribe(params => {
    this.params = params;
    // const dayChartOptions = {
    //   chart: {
    //     type: 'spline'
    //   },
    //   title: {
    //     text: 'Средняя дневная температура'
    //   },
    //   subtitle: {
    //     text: 'Source: openweathermap.org'
    //   },
    //   xAxis: {
    //     categories: this.params.hours /* [1, 2, 3, 4, 5, 6] */
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Температура °C'
    //     }
    //   },
    //   tooltip: {
    //     valueSuffix: ' °C'
    //   },
    //   series: [
    //     {
    //       name: 'Петрозаводск',
    //       data: this.params.temperature /* [1, 2, 3, 4, 5, 6] */as Highcharts.SeriesLineDataOptions
    //     }
    //   ]
    // };
    // return new Highcharts.Chart(dayChartOptions);
    this.renderChart();
  });

  renderChart() {
    this.highcharts = Highcharts;
    this.chartOptions = {
      // const chart = Highcharts.chart('chart_container', {
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
        categories: this.params.hours /* [1, 2, 3, 4, 5, 6] */
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
          data: this.params.temperature /* [1, 2, 3, 4, 5, 6] */as Highcharts.SeriesLineDataOptions
        }
      ]
    // });
    };
    // this.ClearParams.emit();
  }

  ngOnInit() {
    // console.log(this.params);
  }

  ngDoCheck() {
    // console.log(this.params);
  }
}

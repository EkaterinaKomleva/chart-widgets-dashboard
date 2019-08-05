import { Component, Output, EventEmitter } from '@angular/core';
import { ForecastService } from './forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private forecastService: ForecastService) {}

  @Output() StartLoad1 = new EventEmitter();

  shiftData = 3;

  params: {hours: string[], temperature: number[], humidity: number[], pressure: number[], wind: number[]} = {
    hours: [],
    temperature: [],
    humidity: [],
    pressure: [],
    wind: []
  };

  loadForecast() {
    // window.alert('Hi!');
    this.forecastService
      .getForecast()
      .subscribe((response) => {
        console.log(response);
        // response[`list`].forEach((elem) => {
        //   console.log(response[`list`]);
        this.getData(response[`list`]);
      });
  }

  loadForecast2() {
    this.forecastService
      .getForecast2()
      .subscribe((response) => {
        console.log(response);
        // response[`list`].forEach((elem) => {
        //   console.log(response[`list`]);
        this.getData(response[`list`]);
      });
  }

  getData(resp) {
    // если свойство hours[0] в параметрах заполнено и время предыдущего и последовательного вызова
    // совпадают, новые параметры не добавляем. (первое для того, чтобы график не дублировался, а второе
    // для того, чтобы можно было построить другой график)
    if (this.params.hours[0]
      && +resp[0].dt_txt.slice(11, 13) + this.shiftData + resp[0].dt_txt.slice(13, 16) === this.params.hours[0]) {
      // console.log(+resp[0].dt_txt.slice(11, 13) + this.shiftData);
      return;
    }

    if (this.params.hours.length !== resp.length) {
      this.params.hours = [];
      this.params.temperature = [];
      this.params.humidity = [];
      this.params.pressure = [];
      this.params.wind = [];
    }

    for (const elem of resp) {
      const hh = +elem.dt_txt.slice(11, 13) + this.shiftData;

      if (hh + elem.dt_txt.slice(13, 16) === '24:00') {
        this.params.hours.push('00:00');
      } else {
        this.params.hours.push(hh + elem.dt_txt.slice(13, 16));
      }

      console.log(this.params.hours);
      this.params.temperature.push(elem.main.temp);
      this.params.humidity.push(elem.main.humidity);
      this.params.pressure.push(elem.main.pressure);
      this.params.wind.push(elem.wind.speed);
    }
    return this.params;
  }

  // clearParams() {
  //   this.params.hours = [];
  //   this.params.temperature = [];
  //   this.params.humidity = [];
  //   this.params.pressure = [];
  //   this.params.wind = [];
  //   console.log(this.params);
  // }
}

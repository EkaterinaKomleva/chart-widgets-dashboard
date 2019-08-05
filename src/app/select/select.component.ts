import { Component, OnInit, /* Output, EventEmitter,*/ Input, OnChanges} from '@angular/core';
import { TransmitterService } from '../transmitter.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnChanges {

  @Input()
  params!: {
    hours: string[];
    temperature: number[];
    humidity: number[];
    pressure: number[];
    wind: number[];
  };

  constructor(private transmitterService: TransmitterService) { }

  paramsTemp!: {
    hours: string[];
    temperature: number[];
  };
  paramsHum!: {
    hours: string[];
    humidity: number[];
  };
  paramsPres!: {
    hours: string[];
    pressure: number[];
  };
  paramsWind!: {
    hours: string[];
    wind: number[];
  };

  parseParams(selectElem: HTMLSelectElement) {
    console.log(selectElem.value);

    switch (selectElem.value) {
      case 'temperature':
        this.paramsTemp = {
          hours: this.params.hours,
          temperature: this.params.temperature
        };
        console.log(this.paramsTemp);
        this.transmitterService.sendParams(this.paramsTemp);
        break;

      case 'humidity':
        this.paramsHum = {
          hours: this.params.hours,
          humidity: this.params.humidity
        };
        console.log(this.paramsHum);
        this.transmitterService.sendParams(this.paramsHum);
        break;

      case 'pressure':
        this.paramsPres = {
          hours: this.params.hours,
          pressure: this.params.pressure
        };
        break;

      case 'wind':
        this.paramsWind = {
          hours: this.params.hours,
          wind: this.params.wind
        };
        break;
    }
  }

  // sendParams(): void {
  //   this.transmitterService.sendParams(this.params);
  // }

  // activateChartTemp() {
  //   // console.log(this.params);
  // }

  ngOnChanges() {
    // console.log(this.params);
  }

}


// @Input() params: {hours: string[], temperature: number[], humidity: number[], pressure: number[], wind: number[]} = {};

// paramsTemp: {hours: string[], temperature: number[]};
// paramsHum: {hours: string[], humidity: number[]};
// paramsPres: {hours: string[], pressure: number[]};
// paramsWind: {hours: string[], wind: number[]};

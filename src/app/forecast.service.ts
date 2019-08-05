import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ForecastService {
  constructor(private http: HttpClient) {}

  getForecast() {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour >= 0 && currentHour <= 2) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=7&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 3 && currentHour <= 5) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=6&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 6 && currentHour <= 8) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=5&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 9 && currentHour <= 11) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=4&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 12 && currentHour <= 14) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=3&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 15 && currentHour <= 17) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=2&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 18 && currentHour <= 23) {
      return this.http
        .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=1&APPID=69a8a25ac72c1b683cf93ac166329be8');
    } else {
      return;
    }
  }

  getForecast2() {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour >= 0 && currentHour <= 2) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=15&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 3 && currentHour <= 5) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=14&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 6 && currentHour <= 8) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=13&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 9 && currentHour <= 11) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=12&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 12 && currentHour <= 14) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=11&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 15 && currentHour <= 17) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=10&APPID=69a8a25ac72c1b683cf93ac166329be8');
    }
    if (currentHour >= 18 && currentHour <= 23) {
      return this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?id=509820&units=metric&lang=ru&cnt=9&APPID=69a8a25ac72c1b683cf93ac166329be8');
    } else {
      return;
    }
  }

}

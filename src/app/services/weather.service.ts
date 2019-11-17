import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class WeatherService {

  private apiKey = '37bd7ebe43f9ccf2058d4f1a201d6b94';
  private url = 'http://api.openweathermap.org/data/2.5/weather/';

  constructor(
    private http: HttpClient) {
  }

  getWeatherDataByCoords(lat, lon) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('lang', 'hu')
      .set('appid', this.apiKey);

    return this.http.get(this.url, {params});
  }
}

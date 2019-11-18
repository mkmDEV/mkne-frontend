import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WeatherService {

  readonly API_KEY = '37bd7ebe43f9ccf2058d4f1a201d6b94';
  readonly ENDPOINT_URL = 'http://api.openweathermap.org/data/2.5/weather/';

  constructor(
    private http: HttpClient) {
  }

  getWeatherDataByCoords(lat: number, lon: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lon', lon.toString());
    params = params.set('units', 'metric');
    params = params.set('lang', 'hu');
    params = params.set('appid', this.API_KEY);

    return this.http.get(this.ENDPOINT_URL, {params});
  }
}

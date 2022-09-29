import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
  readonly API_KEY = environment.WEATHER_API_KEY;
  readonly ENDPOINT_URL = environment.WEATHER_API_URL;

  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat: number, lon: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lon', lon.toString());
    params = params.set('units', 'metric');
    params = params.set('lang', 'hu');
    params = params.set('appid', this.API_KEY);

    return this.http.get(this.ENDPOINT_URL, { params });
  }
}

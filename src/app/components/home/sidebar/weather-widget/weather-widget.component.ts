import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../services/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  protected data: any;
  private lat;
  private lon;
  private Budapest = { lat: 47.4984, lon: 19.0405 };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(success => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService
          .getWeatherDataByCoords(this.lat, this.lon)
          .subscribe(data => {
            this.data = data;
          });
      });
    }
    this.weatherService
      .getWeatherDataByCoords(this.Budapest.lat, this.Budapest.lon)
      .subscribe(data => {
        this.data = data;
      });
  }
}

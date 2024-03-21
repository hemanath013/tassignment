import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService, user } from '../user.service'; // Assuming 'User' interface is defined in user.service
import * as L from 'leaflet';

declare module 'leaflet' {
  namespace heatLayer { }
  function heatLayer(latlngs: any[], options?: any): any;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map!: L.Map;
  dataResponse: user[] = [];

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersBetweenDates().subscribe(
      (response: user[]) => {
        this.dataResponse = response;
        this.initMap();
      }
    );
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [36, 0],
      zoom: 3
    });
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  
    const heatData = this.dataResponse.map(record => [record.latitude, record.longitude, 1]);
    const heatLayer = (L as any).heatLayer(heatData, {
      radius: 20,
      gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'blue' }
    }).addTo(this.map);
  }  
}

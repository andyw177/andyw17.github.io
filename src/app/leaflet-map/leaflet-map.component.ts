import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements AfterViewInit  {
  private map:any;
  

  private initMap(): void {
    const greenIcon = L.icon({
      iconUrl: 'https://imgur.com/rRrN8rN.png',
      // shadowUrl: './marker-shadow.png',
      iconSize:     [28, 45], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [15, 84], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-2, -74] // point from which the popup should open relative to the iconAnchor
  });
  
  
   
    const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    const grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1,    maxZoom: 100,
    minZoom: 0, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
	  const streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1,    maxZoom: 100,
    minZoom: 0, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 18,
    //   minZoom: 3,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });

    this.map = L.map('map', {
      center: [41.525798, -72.0999],
      zoom: 14,
      layers: [grayscale]
    });

    const baseLayers = {
      'Grayscale': grayscale,
      'Streets': streets
    };

    const popup = L.popup()
		.setContent('HeyiRepair<br> 433 W Main Street <br> Norwich CT United States 06360 <br><a href="https://www.google.com/maps/dir/?api=1&amp;destination=433%20W%20Main%20Street%20Norwich%20CT%20United%20States%2006360" target="_blank"">Directions</a>')
    .setLatLng( [41.52508, -72.0944]).openOn(this.map);
    const marker = new L.Marker([41.520368517503286, -72.09441415312723],{icon:greenIcon}).bindPopup(popup);//.setLatLng( [41.53108, -72.0958]);
    // const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}';
  
    L.control.layers(baseLayers).addTo(this.map);
    // tiles.addTo(this.map);
    marker.addTo(this.map);
    popup.addTo(this.map);
  }
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }
}


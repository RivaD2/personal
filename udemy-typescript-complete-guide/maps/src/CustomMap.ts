// These can be used to create an instance or to refer to the type of User/Company
import { User } from "./User";
import { Company } from "./Company";

// Instructions to every other class on how they can be an arg to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

// Carries reference to google map
// Goal is to hide existence of google map
export class CustomMap {
  private googleMap:google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable):void {
    const marker = new google.maps.Marker({
      // Map we want to shower marker on
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
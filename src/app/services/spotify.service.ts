import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("SW Spotifi listo!!!");
  }


  getNewReleases() {

  const headers = new HttpHeaders({
'Authorization': 'Bearer BQCGN4B85I-y6H486EoGFGOwJxI8HgoLYQdzdm-XCvx7suLzwePGYsU6URUhazEd5e2p979GjY8Iso3JwDU'
  });

   return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20",{headers});
  }

}

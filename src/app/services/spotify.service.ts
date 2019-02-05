import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("SW Spotifi listo!!!");
  }


  getNewReleases() {

  const headers = new HttpHeaders({
'Authorization': 'Bearer BQCkyLbwF3vHrOqezNm4lXA1kLdbyNKbrYIBFixbpV3f_suKyhtdYwcs_KQI8yeAyi6-6kjXBycxOF-gqgKS5VYNsTBcf1QO3YIuy7MBCrGthDkav2daKH4liGxTydRRLyLuIszhXw5MF02nfenc'
  });

   return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20",{headers})
   .pipe( map( data => data['albums'].items ));
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
  'Authorization': 'Bearer BQCkyLbwF3vHrOqezNm4lXA1kLdbyNKbrYIBFixbpV3f_suKyhtdYwcs_KQI8yeAyi6-6kjXBycxOF-gqgKS5VYNsTBcf1QO3YIuy7MBCrGthDkav2daKH4liGxTydRRLyLuIszhXw5MF02nfenc'
    });
  
     return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers});
    }
  

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }
  getData() : Observable<any> {
    return <Observable<any>> this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json") ;
  }

  getImages() : Observable<any> {
    return <Observable<any>> this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json") ;
  }
}

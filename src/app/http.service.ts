import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBusiness } from 'src/models/IBusiness';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = "http://127.0.0.1:5000/searchbyname/";
  constructor(private http: HttpClient) { 

   }

  searchByName(name: string): Promise<IBusiness[]> {
      return this.http.get<IBusiness[]>(this.url+name).toPromise();
  }

}

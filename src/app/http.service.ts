import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBusiness } from 'src/models/IBusiness';
import { IProspect } from 'src/models/IProspect';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = "http://127.0.0.1:5000/searchbyname/";
  url1: string = "http://127.0.0.1:5000/prospect/";


  constructor(private http: HttpClient) { 

   }

  searchByBusinessName(name: string): Promise<IBusiness[]> {
      return this.http.get<IBusiness[]>(this.url+name).toPromise();
  }

  searchByName(name: string): Promise<IProspect[]> {
    return this.http.get<IProspect[]>(this.url+name).toPromise();
  }

}

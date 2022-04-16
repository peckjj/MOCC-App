import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBusiness } from 'src/models/IBusiness';
import { IProspect } from 'src/models/IProspect';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  apiHost: string = "http://127.0.0.1:5000/";
  url: string = "searchbyname";
  url1: string = "prospect";
  url2: string = "create-profile";



  constructor(private http: HttpClient) { 

   }

  async searchByBusinessName(name: string): Promise<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiHost+this.url+"/"+name).toPromise();
  }

  async searchByName(name: string): Promise<IProspect[]> {
    return this.http.get<IProspect[]>(this.apiHost+this.url1+"/"+name).toPromise();
  }

  async submitBusiness(business: IBusiness): Promise<IBusiness[]> {
    return this.http.post<IBusiness[]>(this.apiHost+this.url2, business).toPromise();
  }

}

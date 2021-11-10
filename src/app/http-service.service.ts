import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  hitFlask() {
    return this.http.get<any>('http://127.0.0.1:5000/searchbyname/t');
  }
}

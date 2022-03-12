import { Component, OnInit } from '@angular/core';
import { IProspect } from 'src/models/IProspect';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {

  searchResults: IProspect[];

  notIncluded: string[] = [

    "id",
    "birthday",
    "bio",
    "status",
    "password",

  ]

  prospect: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.http.searchByName(this.prospect).then(data => this.searchResults= data);
  }

  getIncluded(title: IProspect): string[] {
    return Object.keys(title).filter( (data)=> !this.notIncluded.includes(data) );

}

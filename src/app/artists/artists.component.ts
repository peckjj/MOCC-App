import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  // Artist: { first: string, last: string, birthday: string, email:	string, state: string, city: string, contact: string, password: string, website_link: string,
  //   profile: string, genre: string } = {

  //     first: document.getElementById("firstName").innerHTML,
  //     last: document.getElementById("lastName").innerHTML,
  //     birthday: document.getElementById("birthday").innerHTML,
  //     email: document.getElementById("email").innerHTML,
  //     state: document.getElementById("state").innerHTML,
  //     city: document.getElementById("city").innerHTML,
  //     contact: document.getElementById("contact").innerHTML,
  //     password: document.getElementById("password").innerHTML,
  //     website_link: document.getElementById("website").innerHTML,
  //     profile: document.getElementById("myfile").innerHTML,
  //     genre: document.getElementById("genre").innerHTML

  //   };

  constructor() { }

  ngOnInit(): void {
  }

}

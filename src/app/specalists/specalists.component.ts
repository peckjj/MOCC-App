import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specalists',
  templateUrl: './specalists.component.html',
  styleUrls: ['./specalists.component.css']
})
export class SpecalistsComponent implements OnInit {

  Specialist: { first: string, last: string, birthday: string, email: string, education: string, state: string, city: string, bio: string, contact: string;
    password:	string, website_link:	string, specialization:	string, profile: string } = {

      first: document.getElementById("firstName").innerHTML,
      last: document.getElementById("lastName").innerHTML,
      birthday: document.getElementById("birthday").innerHTML,
      email: document.getElementById("email").innerHTML,
      education: document.getElementById("education").innerHTML,
      state: document.getElementById("state").innerHTML,
      city: document.getElementById("city").innerHTML,
      bio: document.getElementById("bio").innerHTML,
      contact: document.getElementById("number").innerHTML,
      password: document.getElementById("password").innerHTML,
      website_link: document.getElementById("weblink").innerHTML,
      profile: document.getElementById("resume").innerHTML,
      specialization: document.getElementById("specialization").innerHTML

    };

  constructor() { }

  ngOnInit(): void {
  }

}

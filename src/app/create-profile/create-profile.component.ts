import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  UserInfo: { first: string, last: string, birthday: string, business_name: string, business_address: string, contact: string, email: string, state: string, city: string, 
    zip: string, specialization: string, ownership: string, website_link: string, mission_statement: string, hire: string, password: string, profile: string } = {

      first: document.getElementById("firstName").innerHTML,
      last: document.getElementById("lastName").innerHTML,
      birthday: document.getElementById("birthday").innerHTML,
      business_name: document.getElementById("busName").innerHTML,
      business_address: document.getElementById("address").innerHTML,
      contact: document.getElementById("number").innerHTML,
      email: document.getElementById("email").innerHTML,
      state: document.getElementById("state").innerHTML,
      city: document.getElementById("city").innerHTML,
      zip: document.getElementById("zip").innerHTML,
      specialization: document.getElementById("specialization").innerHTML, // or use description innerHTML
      ownership: document.getElementById("ownership").innerHTML,
      website_link: document.getElementById("weblink").innerHTML,
      mission_statement: document.getElementById("missionState").innerHTML,
      hire: document.getElementById("hire").innerHTML,
      password: document.getElementById("password").innerHTML,
      profile: document.getElementById("myfile").innerHTML

    };

  // input = document.getElementById("password").innerHTML;
  // value: string = "Retype Password:";

  // passwordLabel = document.createElement("label");
  

  // password = document.createElement("input");

  // retypePassword(input) {
  //   if (input != 0) {
  //     return console.log(this.passwordLabel);
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}

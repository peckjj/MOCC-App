import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  UserInfo: { }

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

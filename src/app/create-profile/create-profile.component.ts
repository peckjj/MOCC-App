import { Component, ChangeDetectorRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IBusiness } from 'src/models/IBusiness';
import { HttpService } from '../http.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  // UserInfo: { first: string, last: string, birthday: string, business_name: string, business_address: string, contact: string, email: string, state: string, city: string, 
  //   zip: string, specialization: string, ownership: string, website_link: string, mission_statement: string, hire: string, password: string, profile: string } = {

  isSubmitting: boolean = false;

  // form? = FormGroup;

  account: IBusiness[] = [];

  notIncluded: string[] = [
    "id",
    "status",
    "rating"
  ]

  // input = document.getElementById("password").innerHTML;
  // value: string = "Retype Password:";

  // passwordLabel = document.createElement("label");

  // password = document.createElement("input");

  // retypePassword(input) {
  //   if (input != 0) {
  //     return console.log(this.passwordLabel);
  //   }
  // }

  // exform: FormGroup;

  // FOR FORM VALIDATION: private ref: ChangeDetectorRef, private fb: FormBuilder
  constructor(private http: HttpService ) { 
      
  }

  

  ngOnInit(): void {

    // this.exform = new FormGroup({

    //   'first': new FormControl(null, Validators.required),
    //   'last': new FormControl(null, Validators.required),
    //   'birthday': new FormControl(null, Validators.required),
    //   'phone': new FormControl(null, Validators.pattern('/^[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{4})$/')),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'password': new FormControl(null, Validators.required),
    //   'busName': new FormControl(null, Validators.required),
    //   'busAddy': new FormControl(null, Validators.required),
    //   'city': new FormControl(null, Validators.required),
    //   'state': new FormControl(null, Validators.required),
    //   'zip': new FormControl(null, Validators.required),
    //   'hire': new FormControl(null, Validators.required),
    //   'specialization': new FormControl(null, Validators.required),
    //   'ownership': new FormControl(null, Validators.required),
    //   'text': new FormControl(null, [Validators.required, Validators.minLength(10)]),
    //   'file': new FormControl(null, Validators.required)

    // });
  }


  async onsubmit() {

    this.isSubmitting = true;

    let business = {

      first: (<any>document.getElementById("firstName")).value,
      last: (<any>document.getElementById("lastName")).value,
      birthday: (<any>document.getElementById("birthday")).value,
      business_name: (<any>document.getElementById("busName")).value,
      business_address: (<any>document.getElementById("address")).value,
      contact: (<any>document.getElementById("number")).value,
      email: (<any>document.getElementById("email")).value,
      state: (<any>document.getElementById("state")).value,
      city: (<any>document.getElementById("city")).value,
      zip: (<any>document.getElementById("zip")).value,
      specialization: (<any>document.getElementById("specialization")).value, // or use description value
      ownership: (<any>document.getElementById("ownership")).value,
      website_link: (<any>document.getElementById("weblink")).value,
      mission_statement: (<any>document.getElementById("missionState")).value,
      hire: (<any>document.getElementById("hire")).value,
      password: (<any>document.getElementById("password")).value,
      profile: (<any>document.getElementById("myfile")).value

    };

    await this.http.submitBusiness(business)

    this.isSubmitting = false;

  }

  

}

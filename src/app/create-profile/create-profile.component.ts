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

  // FOR FORM VALIDATION: private ref: ChangeDetectorRef, private fb: FormBuilder
  constructor(private http: HttpService ) { 
      
   }



  ngOnInit(): void {
    // this.form = this.fb.group({
    //   firstName: this.fb.control('', Validators.required),
    //   lastName: this.fb.control('', Validators.required),
    //   birthday: this.fb.control('', Validators.required),
    //   phone: this.fb.control('', Validators.required),
    //   email: this.fb.control('', Validators.required),
    //   password: this.fb.control('', Validators.required),
    //   busName: this.fb.control('', Validators.required),
    //   address: this.fb.control('', Validators.required),
    //   city: this.fb.control('', Validators.required),
    //   state: this.fb.control('', Validators.required),
    //   zip: this.fb.control('', Validators.required),
    //   hire: this.fb.control('', Validators.required),
    //   businessType: this.fb.control('', Validators.required),
    //   // other: this.fb.control('', Validators.required),
    //   ownership: this.fb.control('', Validators.required),
    //   missionState: this.fb.control('', Validators.required)
    // })
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

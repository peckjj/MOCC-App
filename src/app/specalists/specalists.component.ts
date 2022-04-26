import { Component, OnInit } from '@angular/core';
import { IProspect } from 'src/models/IProspect';
import { HttpService } from '../http.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-specalists',
  templateUrl: './specalists.component.html',
  styleUrls: ['./specalists.component.css']
})
export class SpecalistsComponent implements OnInit {

  // Specialist: { first: string, last: string, birthday: string, email: string, education: string, state: string, city: string, bio: string, contact: string;
  //   password:	string, website_link:	string, specialization:	string, profile: string } = {

  //     first: document.getElementById("firstName").innerHTML,
  //     last: document.getElementById("lastName").innerHTML,
  //     birthday: document.getElementById("birthday").innerHTML,
  //     email: document.getElementById("email").innerHTML,
  //     education: document.getElementById("education").innerHTML,
  //     state: document.getElementById("state").innerHTML,
  //     city: document.getElementById("city").innerHTML,
  //     bio: document.getElementById("bio").innerHTML,
  //     contact: document.getElementById("number").innerHTML,
  //     password: document.getElementById("password").innerHTML,
  //     website_link: document.getElementById("weblink").innerHTML,
  //     profile: document.getElementById("resume").innerHTML,
  //     specialization: document.getElementById("specialization").innerHTML

  //   };

  isSubmitting: boolean = false;

  prospect: IProspect[] = [];

  constructor(private http: HttpService) { 

   }

  ngOnInit(): void {

    // this.exform = new FormGroup({

    //   'first': new FormControl(null, Validators.required),
    //   'last': new FormControl(null, Validators.required),
    //   'phone': new FormControl(null, Validators.pattern('/^[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{4})$/')),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'password': new FormControl(null, Validators.required),
    //   'city': new FormControl(null, Validators.required),
    //   'state': new FormControl(null, Validators.required),
    //   'specialization': new FormControl(null, Validators.required),
    //   'text': new FormControl(null, [Validators.required, Validators.minLength(10)]),
    //   'file': new FormControl(null, Validators.required),
    //   'education': new FormControl(null, Validators.required),

    // });

  }

  async onsubmit() {

    this.isSubmitting = true;

    let prospect = {

      first: (<any>document.getElementById("firstName")).value,
      last: (<any>document.getElementById("lastName")).value,
      birthday: (<any>document.getElementById("birthday")).value,    
      contact: (<any>document.getElementById("number")).value,
      email: (<any>document.getElementById("email")).value,
      state: (<any>document.getElementById("state")).value,
      city: (<any>document.getElementById("city")).value,
      specialization: (<any>document.getElementById("specialization")).value, // or use description value
      website_link: (<any>document.getElementById("weblink")).value,
      bio: (<any>document.getElementById("bio")).value,
      password: (<any>document.getElementById("password")).value, 
      profile: (<any>document.getElementById("resume")).value,
      education: (<any>document.getElementById("education")).value

    };

    await this.http.submitProspect(prospect)

    this.isSubmitting = false;

  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/models/IArtist';
import { HttpService } from '../http.service';

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

  account: IArtist[] = [];

  isSubmitting: boolean = false;

  constructor(private http: HttpService) { }

  ngOnInit(): void {

    // this.exform = new FormGroup({

    //   'first': new FormControl(null, Validators.required),
    //   'last': new FormControl(null, Validators.required),
    //   'phone': new FormControl(null, Validators.pattern('/^[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{4})$/')),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'password': new FormControl(null, Validators.required),
    //   'city': new FormControl(null, Validators.required),
    //   'state': new FormControl(null, Validators.required),
    //   'zip': new FormControl(null, Validators.required),
    //   'genre': new FormControl(null, Validators.required),
    //   'file': new FormControl(null, Validators.required)

    // });

  }

  async onsubmit() {

    this.isSubmitting = true;

    let artist = {

      first: (<any>document.getElementById("firstName")).value,
      last: (<any>document.getElementById("lastName")).value,
      birthday: (<any>document.getElementById("birthday")).value,
      contact: (<any>document.getElementById("number")).value,
      email: (<any>document.getElementById("email")).value,
      state: (<any>document.getElementById("state")).value,
      city: (<any>document.getElementById("city")).value,
      zip: (<any>document.getElementById("zip")).value,
      website_link: (<any>document.getElementById("weblink")).value,
      password: (<any>document.getElementById("password")).value,
      profile: (<any>document.getElementById("myfile")).value,
      genre: (<any>document.getElementById("genre")).value

    };

    await this.http.submitArtist(artist)

    this.isSubmitting = false;

  }

}

import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/models/IArt';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-submit-art',
  templateUrl: './submit-art.component.html',
  styleUrls: ['./submit-art.component.css']
})
export class SubmitArtComponent implements OnInit {

  media: IArt[] = [];

  isSubmitting: boolean = false;

  constructor(private http: HttpService) { }

  ngOnInit(): void {

  }

  async onsubmit() {

    this.isSubmitting = true;

    let media = {

      name: (<any>document.getElementById("name")).value,
      title: (<any>document.getElementById("title")).value,
      email: (<any>document.getElementById("email")).value,
      monetize: (<any>document.getElementById("monetize")).value,
      category: (<any>document.getElementById("category")).value,
      file: (<any>document.getElementById("myfile")).value,
      description: (<any>document.getElementById("message")).value

    }; 

    await this.http.submitArt(media)

    this.isSubmitting = false;

  }

}

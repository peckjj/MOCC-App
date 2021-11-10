import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  searchData = [];

  ngOnInit(): void {
  }

  hitServer() {
    this.httpService.hitFlask().subscribe(
      (data) => {
        this.searchData = data;
        console.log(data);
      }
    );
  }

}

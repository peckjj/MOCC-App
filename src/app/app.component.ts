import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: 'MOCC-App';

  exform: FormGroup;

  ngOnInit() {

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

}
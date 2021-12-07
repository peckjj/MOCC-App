import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // guser;
  // constructor(
  //   ngZone: NgZone
  // ) {
  //   window: ['onSignIn'] = user => ngZone.run(
  //     () => {
  //       this.afterSignUp(user);
  //     }
  //   )
  // }

  ngOnInit(): void {
  }

  // afterSignUp(googleUser) {
  //   this.guser = googleUser;
  // }

}

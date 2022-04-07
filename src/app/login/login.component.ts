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

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 
  }

  // afterSignUp(googleUser) {
  //   this.guser = googleUser;
  // }

}

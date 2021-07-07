import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit {
  public welcomeMessage: string = 'Hello Teja';
  public firstName: string = 'First Name';
  public phoneNumber: string = 'Number';
  public mail : string = 'Email';
  public message : string = 'Message';

  public user: any = {};
  public countryCodes = [+91, +641, +441, +91, +641, +441, +91, +641, +441, +91, +641, +441]
  public showCountryCodes: boolean = false;
  constructor() {
   }

  ngOnchanges(): void {
    console.log("component data changed ");
  }
  ngOnInit(): void {
    // this.user.firstName = "";
    // this.user.mobileNumber = "";
    // this.user.email = "";
    // this.user.message = "";
    console.log("component initialised ");
  }

  ngOnDestroy(): void {
    console.log("component destroyed ");
  }

  submitClicked() {
    console.log(this.user);
  }

}


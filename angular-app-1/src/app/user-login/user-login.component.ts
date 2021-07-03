
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public welcomeMessage: string = 'Hello Teja';
  public firstName: string = 'First Name';
  public phoneNumber: string = 'Number';
  public mail : string = 'Email';
  public message : string = 'Message';

  constructor() { }

  ngOnInit(): void {
  }

}

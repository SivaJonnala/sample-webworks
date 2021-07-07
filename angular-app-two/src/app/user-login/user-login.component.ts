import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public Name : string = '';
  public password : string = '';

  public user: any = {};

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  loginClicked() {
    this.router.navigate(['user-details'])
  }
  signupClicked() {
    this.router.navigate(["user-reg"])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import AuthService
import { User } from '../user';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User;

  constructor(
    private router: Router,
    //private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  login($event, user:User){
    // $event.preventDefault();
    console.log('logging in user...', user);

    this.router.navigateByUrl('tasks');

  }
}

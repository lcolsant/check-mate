import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
// import { NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User;
  errors: string[] = [];

  constructor(
    private router: Router,
    private authService:AuthService,
  ) { }

  ngOnInit() {
  }

  login($event, user:User){
    // $event.preventDefault();
    this.authService.login(user).subscribe(user => {
      console.log('logging in user...', user.username);
      this.router.navigateByUrl('tasks');
    },
    response => {
        console.log('in response', response.error.error);
        this.errors.push(response.error.error);
        // this.handleErrors(response.error);
      }
    );
  }

  // private handleErrors(errors: string[] | Error): void {
  //   let result = Array.isArray(errors);
  //   this.errors = Array.isArray(errors) ? errors : [errors.message];
  // }
}

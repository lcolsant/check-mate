import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register(user: User){
    console.log('regisering user...', user);
    event.preventDefault();

    this.router.navigateByUrl('landing');
    
  }

}

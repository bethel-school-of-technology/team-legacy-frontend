import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public user: User = new User();

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  goToLogin() {
    this.router.navigate(['./login']);
  }

  public register() {
    console.log('Register Method called');
    this.AuthService.register(this.user).subscribe((response) => {
      console.log(response);
      this.user = response;
      this.router.navigate(['login']);
    });
  }
}
//Go to lesson and plug in the variables

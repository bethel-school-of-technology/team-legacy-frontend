import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public newUser: User = new User();

  constructor(private router: Router, private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  goToSignUp() {
    this.router.navigate(['sign-up']);    
  }
  goToRecipes(){
    this.AuthService.login(this.newUser).subscribe(response => {
      console.log("Login Sucessful!");
      console.log(response);
      localStorage.setItem("jwt", response.token)
    })
    this.router.navigate(['recipes'])
  }


}

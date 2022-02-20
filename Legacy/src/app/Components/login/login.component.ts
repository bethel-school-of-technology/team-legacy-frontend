import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user: User = new User();

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }
  goToSignUp() {
    this.router.navigate(['./sign-up']);    
  }
  goToRecipes(){
console.log('here');
this.service.login(this.user.username, this.user.password).subscribe(response => {
  console.log(response);

if (response.token) {
  this.router.navigate(['./recipes']);
} else {
  alert("Login not successful");
}
})
// this.router.navigate(['./recipes']); 
    
  }


}


  



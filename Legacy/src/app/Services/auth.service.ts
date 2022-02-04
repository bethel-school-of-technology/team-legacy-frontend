// POST Request sending user credentials to the backend via json file
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = 'http://localhost:8080/api/auth/';
// Make sure url path is correct

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }
public isAuthenticated(): boolean {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired('token');
}

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'sign-up', {
      username,
      email,
      password
    }, httpOptions);
  }
}
// POST Request sending user credentials to the backend via json file
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const AUTH_API = 'http://localhost:3000/users/';
// Make sure url path is correct

// const AUTH_API2 = 'http://localhost:3000/users'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   AUTH_API2 = 'http://localhost:3000/users';
 

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(newuser: User): Observable <User> {
    return this.http.post<User>(this.AUTH_API2 + '/signup', newuser);

    // register(username: string, email: string, password: string): Observable<any> {
    //   return this.http.post(AUTH_API + 'sign-up', {
    //     username,
    //     email,
    //     password
    //   }, httpOptions);
    
  }




  constructor(private http: HttpClient) { }
}
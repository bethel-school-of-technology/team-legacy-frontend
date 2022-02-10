import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../Models/Ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngFormService {
 url: string = "http://localhost:3000/ingredient";
  
 constructor(private http: HttpClient) { }

 addNewIngredient(ingredient:Ingredient): Observable<Ingredient>{
  return this.http.post<Ingredient>(this.url, ingredient);

}

}


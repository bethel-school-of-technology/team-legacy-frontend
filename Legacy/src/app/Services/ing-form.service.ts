import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { Observable } from 'rxjs';
import { Ingredient } from '../Models/Ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngFormService {
 url: string = "http://localhost:3000/ingredients";
//  ingredient: Ingredient[] = new [];
//  count: number = 0;
 constructor(private http: HttpClient) { }

 addNewIngredient(ingredient:Ingredient): Observable<Ingredient>{
  return this.http.post<Ingredient>(this.url, ingredient);
}
// // quantity( ingredient: Ingredient, addedIngredients: Ingredient[]){
// for (let i : number = 0 ; i < addedIngredients.length ; i++){
//  if(addedIngredients[i].ingredient.id === ingredient.ingredient.id)
// }
}





//] angular.module('counterApp', []);

// angular.module('counterApp')
//   .controller('counterCtrl', function() {
//   var limit = 10;
 
//   this.increment = function() {
//     this.count +=1;
//   };
  
//   this.decrement = function() {
//     this.count -=1;
//   };
//   this.isLimitExceeded = function() {
//     return this.count >= limit;
//   };
//   this.countIsZero = function() {
//     return this.count === 0;
//   };
  
// });



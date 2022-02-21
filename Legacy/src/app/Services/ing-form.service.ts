import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { count } from 'console';
import { Observable } from 'rxjs';
import { Ingredient } from '../Models/Ingredients';
import { Router } from '@angular/router';
// import { ING } from '../Models/Ingredients';
@Injectable({
  providedIn: 'root'
})
export class IngFormService {
 url: string = "http://localhost:3000/ingredients";


//  count: number = 0;
// ingredients = ING;
constructor(
  private http: HttpClient,
  private router: Router,
  private ingredientModel:Ingredient) { }

 addNewIngredient(ingredient:Ingredient): Observable<Ingredient>{
  return this.http.post<Ingredient>(this.url, ingredient);
}

// onSelect( ingredients: Ingredient, addedIngredients: Ingredient[], id: number){
//   for (let i : number = 0 ; i < addedIngredients.length ; i++){
//    if(addedIngredients[i].ingredient.id === ingredients.ingredient.id){
//      return this.http.post<Ingredient>(this.url, ingredients);
//    }
   
  }






// deleteIngredient(): Observable<Ingredient>{
//  return this.http.delete<Ingredient>(this.url);
// }






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



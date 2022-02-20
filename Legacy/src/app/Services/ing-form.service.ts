import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { count } from 'console';
import { Observable } from 'rxjs';
import { Ingredient } from '../Models/Ingredients';
// import { ING } from '../Models/Ingredients';
@Injectable({
  providedIn: 'root'
})
export class IngFormService {
 url: string = "http://localhost:3000/ingredients";

//  count: number = 0;
// ingredients = ING;
constructor(private http: HttpClient, ) { }

 addNewIngredient(ingredient:Ingredient): Observable<Ingredient>{
  return this.http.post<Ingredient>(this.url, ingredient);
}
// ***  Function to get ingredient the user inputs and render it in the DOM on the same page(Need to be able to delete it)***
getIngredient(id: number):Observable<Ingredient>{ 
  
  return this.http.get<Ingredient>(`${this.url}/${id}`);
}

}




// deleteIngredient(): Observable<Ingredient>{
//  return this.http.delete<Ingredient>(this.url);
// }



// // quantity( ingredient: Ingredient, addedIngredients: Ingredient[]){
// for (let i : number = 0 ; i < addedIngredients.length ; i++){
//  if(addedIngredients[i].ingredient.id === ingredient.ingredient.id)
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



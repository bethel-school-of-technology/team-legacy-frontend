import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { Url } from 'url';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  // router: any;
  // url: string = '';
  // usersArray: Array = [];
  constructor(private http: HttpClient, private router: Router) { 
    // this.http.getAllTasks().subscribe((data: ))
    
    // this.http.get(this.url).subscribe(data => {
    //   data.json().forEach((element: { ingredient: any; }) => {
    //     TouchSequence.usersArray.push(element.ingredient)
    //   })
    // })
  }

  ngOnInit(): void {
    // localStorage.setItem("ingerdient.id");
  }
  
  // Potential solution to json error
  // public getAllTasks():Observable<Task[]> {  
  //     let URI = `${this.serverApi}/tasks/`;
  //     return this.http.get<Task[]>(URI);
  //   }

  goToCannedGoods() {
    this.router.navigate(['./canned-goods.component.html']);
  }
  goToCondiments() {
    this.router.navigate(['./condiments.component.html']);
  }
  goToDairy() {
    this.router.navigate(['./dairy.component.html']);
  }
  goToFruits() {
    this.router.navigate(['./fruits.component.html']);
  }
  goToGrains() {
    this.router.navigate(['./grains.component.html']);
  }
  goToProtien() {
    this.router.navigate(['./protien.component.html']);
  }
  goToSpices() {
    this.router.navigate(['./spices.component.html']);
  }
  goToVegetables() {
    this.router.navigate(['./vegetables.component.html']);
  }
  goToRecipes() {
    this.router.navigate(['./recipes.component.html'])
    // Add functionality to submit array or selected items to Db
  }

}

// public getAllTasks():Observable<Task[]> {  Potential solution to json error
//   let URI = `${this.serverApi}/tasks/`;
//   return this.http.get<Task[]>(URI);
// }
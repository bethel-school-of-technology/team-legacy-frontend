import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CannedGoodsComponent } from 'src/app/FGC/canned-goods/canned-goods.component';
import { AuthService } from 'src/app/Services/auth.service';
// import { TouchSequence } from 'selenium-webdriver';
// import { Url } from 'url';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  // router: any;
  // url: string = '';
  // usersArray: Array = [];
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { 
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

  // goToCannedGoods() {
  //   this.router.navigate(['./canned-goods']);
  // }
  goToCondiments() {
    this.router.navigate(['condiments']);
  }
  goToDairy() {
    this.router.navigate(['dairy']);
  }
  goToFruits() {
    this.router.navigate(['fruits']);
  }
  goToGrains() {
    this.router.navigate(['grains']);
  }
  goToProtien() {
    this.router.navigate(['protien']);
  }
  goToSpices() {
    this.router.navigate(['spices']);
  }
  goToVegetables() {
    this.router.navigate(['vegetables']);
  }
  goToRecipes() {
    this.router.navigate(['recipes'])
    // Add functionality to submit array or selected items to Db
  }

}

// public getAllTasks():Observable<Task[]> {  Potential solution to json error
//   let URI = `${this.serverApi}/tasks/`;
//   return this.http.get<Task[]>(URI);
// }
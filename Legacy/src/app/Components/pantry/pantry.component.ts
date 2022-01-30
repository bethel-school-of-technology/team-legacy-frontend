import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
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

}

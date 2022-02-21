import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngFormService } from 'src/app/Services/ing-form.service';
import { Ingredient } from 'src/app/Models/Ingredients';
@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  ingredients: Ingredient = new Ingredient
  counterValue = 0;
  id: number = 0;
  addNewIngredient: any;
  constructor(
    private router: Router,
    private ingFormService: IngFormService,
    private http: HttpClient) { }
  ngOnInit(): void {
    //  this.getIngredient();
  }
  back() {
    this.router.navigate(['pantry']);
  }
  onSelect(){
    // this.addNewIngredient.selectedIngredient = this.ingredients;
    this.ingFormService.addNewIngredient(this.ingredients).subscribe(
      response => { alert("Great! ALL done here."); console.log(this.ingredients) }
    )
  };
}

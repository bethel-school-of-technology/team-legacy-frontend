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
  ingredients: Ingredient = new Ingredient;
  addNewIngredient: any;

  constructor(private router:Router, private http: HttpClient, private ingFormService:IngFormService) { }

  ngOnInit(): void {}
  back() {
    this.router.navigate(['./pantry.component.html']);
  }


  onSelect(id: number, ingredient: string, ingredients: Ingredient){
    this.addNewIngredient.selectedIngredient = ingredient;
    this.ingFormService.addNewIngredient(this.ingredients).subscribe(
      response => { alert("Great! ALL done here."); }
    )
  };
}

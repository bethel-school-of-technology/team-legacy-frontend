import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/Models/Ingredients';
import { IngFormService } from 'src/app/Services/ing-form.service';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {

  ingredients: Ingredient = new Ingredient;
  addNewIngredient: any;

  constructor(private router: Router, private ingFormService: IngFormService, private http: HttpClient) { }

  ngOnInit(): void { }

  
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
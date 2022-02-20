import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngFormService } from 'src/app/Services/ing-form.service';
import { Ingredient } from 'src/app/Models/Ingredients';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-condiments',
  templateUrl: './condiments.component.html',
  styleUrls: ['./condiments.component.css']
})
export class CondimentsComponent implements OnInit {
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/Models/Ingredients';
import { IngFormService } from 'src/app/Services/ing-form.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  ingredient: Ingredient = new Ingredient;
  constructor(private router: Router, private ingFormService: IngFormService, private http: HttpClient) { }

  ngOnInit(): void { }

  
  back(){
    this.router.navigate(['./pantry.component.html']);
    this.ingFormService.addNewIngredient(this.ingredient).subscribe(
      response => {alert("Great! ALL done here.");}
    )
  }
}

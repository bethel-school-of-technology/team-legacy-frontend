import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IngFormService } from 'src/app/Services/ing-form.service';
import { Ingredient } from 'src/app/Models/Ingredients';

import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { count } from 'console';

@Component({
  selector: 'app-canned-goods',
  templateUrl: './canned-goods.component.html',
  styleUrls: ['./canned-goods.component.css']
})
export class CannedGoodsComponent implements OnInit {
ingredient: Ingredient = new Ingredient
counterValue = 0;
// ingredient: Ingredient[] = new Ingredient[];

  constructor(private router: Router, private ingFormService: IngFormService, private http: HttpClient) { }

  ngOnInit(): void { }
 
  
  back(){
    this.router.navigate(['./pantry.component.html']);
    this.ingFormService.addNewIngredient(this.ingredient).subscribe(
      response => {alert("Great! ALL done here.");}
    )
  }
 increment(){
   this.counterValue++;
 }
 decrement(){
   this.counterValue--;
 }
}

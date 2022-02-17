import { HttpClient } from '@angular/common/http';
// import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IngFormService } from 'src/app/Services/ing-form.service';
import { Ingredient } from 'src/app/Models/Ingredients';

// import { LocalStorageService } from 'src/app/Services/local-storage.service';
// import { count } from 'console';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-canned-goods',
  templateUrl: './canned-goods.component.html',
  styleUrls: ['./canned-goods.component.css']
})
export class CannedGoodsComponent implements OnInit {
  
  ingredient: Ingredient = new Ingredient
  counterValue = 0;
  // *****Optional*****
  // quantity: number = 0;
  // maxValue?: number = 0;
  // disabled?: boolean = false;
  // setQuantityEvent = new EventEmitter<number>();
  // values: number[] = [];
  constructor(private router: Router, private ingFormService: IngFormService, private http: HttpClient) { }

  ngOnInit(): void {
    // *****Optional*****
    // if (this.maxValue) {
    //   for (let i = 1; i <= this.maxValue; i++) {
    //     this.values.push(i);
    //   }
    // }
  }
  // *****Optional*****
  // setQuantity(value: number) {
  //   this.setQuantityEvent.emit(value);
  // }

  back() {
    this.router.navigate(['./pantry.component.html']);
    this.ingFormService.addNewIngredient(this.ingredient).subscribe(
      response => { alert("Great! ALL done here."); }
    )
  }
  // Function for qty 
  //  increment(){
  //    this.counterValue++;
  //  }
  //  decrement(){
  //    this.counterValue--;
  //  }
}
// quantity sets the initial quantity of items,
// maxValue indicates the maximum number of items that can be selected in one go, 
// and disabled indicates whether the component should be disabled or not. 
// The setQuantityEvent is triggered when a quantity is selected.
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngFormService } from 'src/app/Services/ing-form.service';
import { Ingredient } from 'src/app/Models/Ingredients';

// import { ThisReceiver } from '@angular/compiler';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
   id : number=0;
 
  constructor(private router: Router, 
    private ingFormService: IngFormService, 
    private http: HttpClient) { }

  ngOnInit(): void {
  //  this.getIngredient();
}

  

  getIngredient = (id: number) => {
    // this.ingFormService.getIngredient().subscribe(response => this.ingredient = response);
  }

  back() {
    this.router.navigate(['./pantry.component.html']);
    this.ingFormService.addNewIngredient(this.ingredient).subscribe(
      response => { alert("Great! ALL done here."); }
    )
  }

}

// **** Functionality for QTY selector (Backlog)***
  // *****Optional*****
  // setQuantity(value: number) {
  //   this.setQuantityEvent.emit(value);
  // }

  //  increment(){
  //    this.counterValue++;
  //  }
  //  decrement(){
  //    this.counterValue--;
  //  }

    // if (this.maxValue) {
    //   for (let i = 1; i <= this.maxValue; i++) {
    //     this.values.push(i);
    //   }
    // }

  // quantity: number = 0;
  // maxValue?: number = 0;
  // disabled?: boolean = false;
  // setQuantityEvent = new EventEmitter<number>();
  // values: number[] = [];
//quantity sets the initial quantity of items,
// maxValue indicates the maximum number of items that can be selected in one go,
// and disabled indicates whether the component should be disabled or not.
// The setQuantityEvent is triggered when a quantity is selected.
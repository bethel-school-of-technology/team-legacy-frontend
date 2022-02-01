import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-canned-goods',
  templateUrl: './canned-goods.component.html',
  styleUrls: ['./canned-goods.component.css']
})
export class CannedGoodsComponent implements OnInit {
// foodsFormGroup: FormGroup ;
// canGood: FormControl = new FormControl();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {}

//   save(): void {
// let radioValue = this.foodsFormGroup.get('canGood').value;
//  Console.log(radioValue); }

  }

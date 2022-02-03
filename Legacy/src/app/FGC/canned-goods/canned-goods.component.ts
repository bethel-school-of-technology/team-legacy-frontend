import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-canned-goods',
  templateUrl: './canned-goods.component.html',
  styleUrls: ['./canned-goods.component.css']
})
export class CannedGoodsComponent implements OnInit {
  // newCanned: Canned[] = [];

  constructor(private router: Router, private localStorageService: LocalStorageService, private http: HttpClient) { }

  ngOnInit(): void { }

  foodInCan() {
    // this.localStorageService.foodInCan(this.newCanned);


  }
}

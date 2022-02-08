import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
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
entries = [];
// selectedEntry;
LS = this.localStorageService;
  constructor(private router: Router, private localStorageService: LocalStorageService, private http: HttpClient) { }

  ngOnInit(): void { }

  // onSelectionChange(entry){
  //   this.selectedEntry = Object.LS({}, this.selectedEntry, entry);
  // }
  
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }
}

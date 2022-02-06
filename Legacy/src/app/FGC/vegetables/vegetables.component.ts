import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condiments',
  templateUrl: './condiments.component.html',
  styleUrls: ['./condiments.component.css']
})
export class CondimentsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }

}

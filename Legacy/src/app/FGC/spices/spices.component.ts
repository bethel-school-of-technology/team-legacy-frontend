import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }

}

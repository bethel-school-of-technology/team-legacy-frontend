import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css']
})
export class DairyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grains',
  templateUrl: './grains.component.html',
  styleUrls: ['./grains.component.css']
})
export class GrainsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }

}

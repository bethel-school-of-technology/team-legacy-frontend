import { Component, OnInit } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  images=[ 
    {path:"../../../assets/avacado_toast.jpeg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

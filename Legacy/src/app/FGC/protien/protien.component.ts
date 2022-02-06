import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protien',
  templateUrl: './protien.component.html',
  styleUrls: ['./protien.component.css']
})
export class ProtienComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}
  back(){
    this.router.navigate(['./pantry.comcponent.html']);
  }

}

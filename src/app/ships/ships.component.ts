import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship';
import { SHIPS } from '../mock-ships';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  /*ship: Ship = {
    id: 1,
    name: 'X Wing',
    cargo_capacity: 110,
    passengers: 0
  };*/
  ship: Ship;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  @Output() Loads = new EventEmitter();
  @Output() Loads2 = new EventEmitter();

  ngOnInit() {
  }

}

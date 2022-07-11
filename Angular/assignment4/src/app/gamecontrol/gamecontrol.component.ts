
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() count = new EventEmitter<number>();
  id:any;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  start() {
   this.id = setInterval(() => {
        this.count.emit(this.lastNumber + 1);
        this.lastNumber++;
   },1000)
  }

  stop() {
   clearInterval(this.id);
  }


}

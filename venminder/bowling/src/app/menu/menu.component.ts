import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /** Last rolled count */
  @Input() previousNumber!: number;

  /** Emits number of pins on button click */
  @Output() numberClicked = new EventEmitter<number>();

  /** List of all possible selections */
  readonly numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  /** Emits event on button click */
  clickNumber(pins: number) {
    this.numberClicked.emit(pins);
  }
}

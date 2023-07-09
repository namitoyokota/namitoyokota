import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Frame } from '../../abstractions/frame';

@Component({
  selector: 'frame-card',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  /** Frame with score inputs to display */
  @Input() frame!: Frame;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Frame } from '../abstractions/frame';

@Component({
  selector: 'frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent {
  /** List of frames to display */
  @Input() frameList!: Frame[];
}

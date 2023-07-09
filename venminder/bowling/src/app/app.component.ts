import { Component, OnInit } from '@angular/core';
import { Frame } from './abstractions/frame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** Current state of frame list */
  frameList: Frame[] = [];

  /** Used to set maximum roll possible */
  lastRolledNumber = 0;

  /** Current score to display */
  currentTotal = 0;

  /** Number of frames possible */
  readonly totalFrames = 10;

  /** Project title */
  readonly title = 'Bowling';

  /** On init lifecycle hook */
  ngOnInit() {
    this.createAllFrames();
  }
  
  /** Create 10 frames will undefined values */
  createAllFrames() {
    for(let index = 1; index <= this.totalFrames; index++) {
      const newFrame = new Frame(index, null, null, null, null);
      this.frameList = [...this.frameList, newFrame];
    }
  }

  /** Reset to simulate a new game */
  reset() {
    this.frameList = [];
    this.currentTotal = 0;
    this.lastRolledNumber = 0;

    this.createAllFrames();
  }
 
  /** Adds new roll to the frame */
  addNewRoll(roll: number) {
    this.lastRolledNumber = roll;

    for (const frame of this.frameList) {
      if (this.isLastFrame(frame)) {

        if (frame.first === null) {
          frame.first = roll;

          if (this.isStrike(frame)) {
            this.lastRolledNumber = 0;
          }

          break;
        } else if (frame.second === null) {
          frame.second = roll;
          
          if (this.isSpare(frame) || this.isStrike(frame)) {
            this.lastRolledNumber = 0;
          } else {
            this.lastRolledNumber = 11;
          }

          break;
        } else if (frame.third === null && this.isSpare(frame) || this.isStrike(frame)) {
          frame.third = roll;
          this.lastRolledNumber = 11;
          break;
        }

      } else {

        if (frame.first === null) {
          frame.first = roll;

          if (this.isStrike(frame)) {
            this.lastRolledNumber = 0;
          }

          break;
        } else if (frame.second === null && !this.isStrike(frame)) {
          frame.second = roll;
          this.lastRolledNumber = 0;
          break;
        }

      }
    };
    
    this.calculateScore();
  }

  /** Calculates current score */
  calculateScore() {
    this.currentTotal = 0;

    for (let index = 0; index < this.frameList.length; index++) {
      const currentFrame = this.frameList[index];

      const frameNotStarted = currentFrame.first === null && currentFrame.second === null;
      if (frameNotStarted) {
        break;
      }

      let currentTotal = this.currentTotal + this.add(currentFrame.first, currentFrame.second);
      currentTotal = this.add(currentTotal, currentFrame.third);

      if (this.isStrike(currentFrame)) {
        currentTotal += this.addStrikeBonus(index);
      }
        
      if (this.isSpare(currentFrame)) {
        currentTotal += this.addSpareBonus(index);
      }
    
      currentFrame.total = currentTotal;
      this.currentTotal = currentTotal;
    }
  }

  /** Add next 2 rolls to the current frame */
  private addStrikeBonus(index: number): number {
    const nextFrame = this.frameList[index + 1];
    const nextNextFrame = this.frameList[index + 2];
    const firstBonus = nextFrame?.first;
    const secondBonus = nextFrame?.second !== null ? nextFrame?.second : nextNextFrame?.first;

    return this.add(firstBonus, secondBonus);
  }

  /** Add next roll to the current frame */
  private addSpareBonus(index: number): number {
    const currentFrame = this.frameList[index];
    const nextFrame = this.frameList[index + 1];

    if (this.isLastFrame(currentFrame)) {
      return 0;
    } else {
      return this.getNum(nextFrame.first);
    }
  }

  /** Returns true if 10th frame */
  private isLastFrame(frame: Frame): boolean {
    return frame.index === 10;
  }

  /** Returns true if 10 pins were knocked in first roll */
  private isStrike(frame: Frame): boolean {
    return frame.first === 10;
  }

  /** Returns true if first and second roll knocked all pins */
  private isSpare(frame: Frame): boolean {
    return !this.isStrike(frame) && this.add(frame.first, frame.second) === 10;
  }

  /** Gets number even if null value is passed in */
  private getNum(pins: number | null): number {
    return pins ? pins : 0;
  }

  /** Adds 2 numbers with support to null */
  private add(num1: number | null, num2: number | null): number {
    return this.getNum(num1) + this.getNum(num2);
  }
}

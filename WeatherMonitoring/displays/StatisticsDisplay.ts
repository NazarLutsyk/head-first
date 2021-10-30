import { DisplayElement } from './IDisplay';
import { Observer, Subject } from '../IObservable';

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp = 0;
  private minTemp = 30;
  private tempSum = 0;
  private numReadings = 0;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  public display(): void {
    console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings} / ${this.maxTemp} / ${this.minTemp}`);
  }
}

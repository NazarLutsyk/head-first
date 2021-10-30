import { Observer, Subject } from '../IObservable';
import { DisplayElement } from './IDisplay';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure = 29.92;
  private lastPressure: number;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  public display(): void {
    console.log('Forecast: ');
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure == this.lastPressure) {
      console.log('More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    }
  }
}

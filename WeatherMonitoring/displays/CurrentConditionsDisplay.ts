import { DisplayElement } from './IDisplay';
import { Observer, Subject } from '../IObservable';

export class CurrentConditionsDisplay implements DisplayElement, Observer {
  private temperature: number;
  private humidity: number;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log(`Current conditions ${this.temperature}C degrees and ${this.humidity}% humidity`);
  }
}

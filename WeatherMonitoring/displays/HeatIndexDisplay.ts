import { DisplayElement } from './IDisplay';
import { Observer, Subject } from '../IObservable';

export class HeatIndexDisplay implements DisplayElement, Observer {
  private heatIndex: number;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.heatIndex = this.computeHeatIndex(temperature, humidity);
    this.display();
  }

  public display(): void {
    console.log(`Heat index is ${this.heatIndex}`);
  }

  private computeHeatIndex(t: number, rh: number): number {
    return (
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh)
    );
  }
}

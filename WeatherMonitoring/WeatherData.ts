import { Observer, Subject } from './IObservable';

export class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const observerIndex = this.observers.indexOf(o);
    if (observerIndex >= 0) {
      this.observers.splice(observerIndex, 1);
    }
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  // should be triggered by some 3rdParty
  public measurementsChanged(): void {
    this.notifyObservers();
  }

  // testing method
  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

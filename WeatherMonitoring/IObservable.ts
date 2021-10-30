export interface Subject {
  registerObserver(o: Observer): void;

  removeObserver(o: Observer): void;

  notifyObservers(): void;
}

export interface Observer {
  /*
   * Currently we are passing state via parameters - which is active delivery approach
   * But here is the drawback - observers might not require all data
   * To solve that we can expose getters from the subject, so they be called from observers when they get notified
   */
  update(temperature: number, humidity: number, pressure: number): void;
}

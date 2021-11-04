export interface Light {
  turnOn(): void;
  turnOff(): void;
}

export class MainLight implements Light {
  public turnOff(): void {
    console.log('Light off');
  }

  public turnOn(): void {
    console.log('Light on');
  }
}

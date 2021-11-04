import { Light } from './Gadgets';

export interface Command {
  execute(): void;
  undo(): void;
}

export class TurnOnLight implements Command {
  receiver: Light;

  constructor(light: Light) {
    this.receiver = light;
  }

  public execute(): void {
    this.receiver.turnOn();
  }

  public undo(): void {
    this.receiver.turnOff();
  }
}

export class TurnOffLight implements Command {
  receiver: Light;

  constructor(light: Light) {
    this.receiver = light;
  }

  public execute(): void {
    this.receiver.turnOff();
  }

  public undo(): void {
    this.receiver.turnOn();
  }
}

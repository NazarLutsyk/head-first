import { Command } from './Command';

export class Control {
  private onSlots: Array<Command> = [];
  private offSlots: Array<Command> = [];
  private undoSlot: Command;

  constructor(onSlots: Array<Command>, offSlots: Array<Command>) {
    this.onSlots = onSlots;
    this.offSlots = offSlots;
  }

  pressOnButton(index: number): void {
    const command = this.onSlots[index];
    command.execute();
    this.undoSlot = command;
  }

  pressOffButton(index: number): void {
    const command = this.offSlots[index];
    command.execute();
    this.undoSlot = command;
  }

  undo(): void {
    this.undoSlot.undo();
  }
}

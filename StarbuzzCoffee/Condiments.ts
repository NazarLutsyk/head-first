import { Beverage, CondimentDecorator } from './Beverage';

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  public cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }

  public cost(): number {
    return 0.3 + this.beverage.cost();
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Whip`;
  }

  public cost(): number {
    return 0.4 + this.beverage.cost();
  }
}

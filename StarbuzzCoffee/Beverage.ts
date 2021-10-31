export abstract class Beverage {
  protected description = 'Unknown Beverage';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  protected constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public abstract getDescription(): string;
}

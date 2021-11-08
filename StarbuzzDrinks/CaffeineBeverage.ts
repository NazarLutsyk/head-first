export abstract class CaffeineBeverage {
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantCondiment()) {
      this.addCondiments();
    }
  }

  private boilWater(): void {
    console.log('Boiling water');
  }

  protected abstract brew(): void;

  private pourInCup(): void {
    console.log('Pouring in the cup');
  }

  protected customerWantCondiment(): boolean {
    return false;
  }

  protected addCondiments(): void {
    console.log('No condiments');
  }
}

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log('Adding tea leaf');
  }

  protected customerWantCondiment(): boolean {
    return true;
  }

  protected addCondiments(): void {
    console.log('Adding a lemon');
  }
}

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log('Adding coffee');
  }

  protected customerWantCondiment(): boolean {
    return false;
  }
}

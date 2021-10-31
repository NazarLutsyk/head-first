export abstract class Pizza {
  public abstract prepare(): void;

  public abstract bake(): void;

  public abstract cut(): void;

  public abstract box(): void;
}

export class CheesePizza extends Pizza {
  public bake(): void {
    console.log('Baking Cheese Pizza');
  }

  public box(): void {
    console.log('Boxing Cheese Pizza');
  }

  public cut(): void {
    console.log('Cutting Cheese Pizza');
  }

  public prepare(): void {
    console.log('Preparing Cheese Pizza');
  }
}

export class VeggiePizza extends Pizza {
  public bake(): void {
    console.log('Baking Veggie Pizza');
  }

  public box(): void {
    console.log('Boxing Veggie Pizza');
  }

  public cut(): void {
    console.log('Cutting Veggie Pizza');
  }

  public prepare(): void {
    console.log('Preparing Veggie Pizza');
  }
}

export class ClamPizza extends Pizza {
  public bake(): void {
    console.log('Baking Clam Pizza');
  }

  public box(): void {
    console.log('Boxing Clam Pizza');
  }

  public cut(): void {
    console.log('Cutting Clam Pizza');
  }

  public prepare(): void {
    console.log('Preparing Clam Pizza');
  }
}

export class PepperoniPizza extends Pizza {
  public bake(): void {
    console.log('Baking Pepperoni Pizza');
  }

  public box(): void {
    console.log('Boxing Pepperoni Pizza');
  }

  public cut(): void {
    console.log('Cutting Pepperoni Pizza');
  }

  public prepare(): void {
    console.log('Preparing Pepperoni Pizza');
  }
}

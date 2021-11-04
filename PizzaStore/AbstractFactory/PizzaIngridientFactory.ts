import {
  Cheese,
  Clams,
  Dough,
  ExtraThickDough,
  FreshClams,
  FrozenClams,
  Garlic,
  MarinaraSauce,
  MozzarellaCheese,
  Mushroom,
  Onion,
  Pepperoni,
  PlumTomatoSauce,
  ReggianoCheese,
  Sauce,
  SlicedPepperoni,
  ThinCrustDough,
  Veggie,
} from './Ingredients';

export abstract class PizzaIngredientFactory {
  public abstract createDough(): Dough;
  public abstract createSauce(): Sauce;
  public abstract createCheese(): Cheese;
  public abstract createVeggies(): Array<Veggie>;
  public abstract createPepperoni(): Pepperoni;
  public abstract createClams(): Clams;
}

export class NYPizzaIngredientFactory extends PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough();
  }

  public createSauce(): Sauce {
    return new MarinaraSauce();
  }

  public createCheese(): Cheese {
    return new ReggianoCheese();
  }

  public createVeggies(): Array<Veggie> {
    return [new Garlic(), new Onion()];
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  public createClams(): Clams {
    return new FreshClams();
  }
}

export class ChicagoPizzaIngridientFactory extends PizzaIngredientFactory {
  public createDough(): Dough {
    return new ExtraThickDough();
  }

  public createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  public createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  public createVeggies(): Array<Veggie> {
    return [new Garlic(), new Onion(), new Mushroom()];
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  public createClams(): Clams {
    return new FrozenClams();
  }
}

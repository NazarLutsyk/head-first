import { CheesePizza, ClamsPizza, Pizza } from './Pizza';
import { ChicagoPizzaIngridientFactory, NYPizzaIngredientFactory } from './PizzaIngridientFactory';

export abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    const factory = new NYPizzaIngredientFactory();
    switch (type) {
      case 'cheese':
        return new CheesePizza(factory);
      case 'clam':
        return new ClamsPizza(factory);
      default:
        throw new Error(`We cannot cook ${type} pizza`);
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    const factory = new ChicagoPizzaIngridientFactory();
    switch (type) {
      case 'cheese':
        return new CheesePizza(factory);
      case 'clam':
        return new ClamsPizza(factory);
      default:
        throw new Error(`We cannot cook ${type} pizza`);
    }
  }
}

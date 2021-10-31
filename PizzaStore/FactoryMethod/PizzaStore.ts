import { ChicagoStyleCheesePizza, NYStyleCheesePizza, Pizza } from './Pizza';

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
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza();
      default:
        throw new Error(`We cannot cook ${type} pizza`);
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new ChicagoStyleCheesePizza();
      default:
        throw new Error(`We cannot cook ${type} pizza`);
    }
  }
}

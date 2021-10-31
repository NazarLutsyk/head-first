import { Pizza } from './Pizza';
import { SimplePizzaFactory } from './PizzaFactory';

export class PizzaStore {
  private pizzaFactory: SimplePizzaFactory;

  constructor(pizzaFactory: SimplePizzaFactory) {
    this.pizzaFactory = pizzaFactory;
  }

  public orderPizza(type: string): Pizza {
    const pizza = this.pizzaFactory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

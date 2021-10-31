import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from './Pizza';

export class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'pepperoni':
        return new PepperoniPizza();
      case 'clam':
        return new ClamPizza();
      case 'veggie':
        return new VeggiePizza();
      default:
        throw new Error(`We cannot cook ${type} pizza`);
    }
  }
}

import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggie } from './Ingredients';
import { PizzaIngredientFactory } from './PizzaIngridientFactory';

export abstract class Pizza {
  name: string;
  dough: Dough;
  sauce: Sauce;
  veggies: Array<Veggie>;
  cheese: Cheese;
  pepperoni: Pepperoni;
  clams: Clams;

  constructor(protected ingredientsFactory: PizzaIngredientFactory) {}

  public abstract prepare(): void;

  public bake(): void {
    console.log('Baking for 25 minutes');
  }

  public cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  public box(): void {
    console.log('Place pizza in official PizzaStore box');
  }
}

export class CheesePizza extends Pizza {
  public prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientsFactory.createDough();
    this.sauce = this.ingredientsFactory.createSauce();
    this.cheese = this.ingredientsFactory.createCheese();
  }
}

export class ClamsPizza extends Pizza {
  public prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientsFactory.createDough();
    this.sauce = this.ingredientsFactory.createSauce();
    this.cheese = this.ingredientsFactory.createCheese();
    this.clams = this.ingredientsFactory.createClams();
  }
}

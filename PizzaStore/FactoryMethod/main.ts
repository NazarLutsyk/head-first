import { ChicagoPizzaStore, NYPizzaStore } from './PizzaStore';

const nyPizzaStore = new NYPizzaStore();
nyPizzaStore.orderPizza('cheese');

const chicagoPizzaStore = new ChicagoPizzaStore();
chicagoPizzaStore.orderPizza('cheese');

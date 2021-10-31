import { Espresso, HouseBlend } from './Drinks';
import { Mocha, Soy, Whip } from './Condiments';
import { Beverage } from './Beverage';

const espresso = new Espresso();
console.log(`${espresso.getDescription()} ${espresso.cost()}$`);

let houseBlend: Beverage = new HouseBlend();
houseBlend = new Mocha(houseBlend);
houseBlend = new Mocha(houseBlend);
houseBlend = new Whip(houseBlend);
console.log(`${houseBlend.getDescription()} ${houseBlend.cost()}$`);

let houseBlendSoy: Beverage = new HouseBlend();
houseBlendSoy = new Soy(houseBlendSoy);
houseBlendSoy = new Mocha(houseBlendSoy);
houseBlendSoy = new Whip(houseBlendSoy);
console.log(`${houseBlendSoy.getDescription()} ${houseBlendSoy.cost()}$`);

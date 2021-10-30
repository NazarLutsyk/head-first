import { MallardDuck, ModelDuck, RubberDuck } from './Duck';
import { FlyRocketPowered } from './Behavior';

const mallardDuck = new MallardDuck();
mallardDuck.performQuack();
mallardDuck.performFly();

const rubberDuck = new RubberDuck();
rubberDuck.performQuack();
rubberDuck.performFly();

const modelDuck = new ModelDuck();
modelDuck.performFly();
// We can change fly behavior at the runtime, which wouldn't be possible if we not separate behavior
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();

import { FlyBehavior, FlyNoWay, FlyWithWings, Quack, QuackBehavior, Squeak } from './Behavior';

/*
* Separate changeable from static!
* */

export abstract class Duck {
    // Depending on the separated behavior which is described as an interface.
    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }

    // let's assume that this methods works fine for all sub-classes
    public swim(): void {
        console.log('Swimming...');
    }

    public abstract display(): void;
}

export class MallardDuck extends Duck {
    constructor() {
        super();
        // Depending on the implementation which is not good, will be fixed later.
        // But, still we have pretty flexible code
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display(): void {
        console.log('Mallard duck representation');
    }
}

export class ReadheadDuck extends Duck {
    constructor() {
        super();
        // Depending on the implementation which is not good, will be fixed later.
        // But, still we have pretty flexible code
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display(): void {
        console.log('Readhead duck representation');
    }
}

export class RubberDuck extends Duck {
    constructor() {
        super();
        // Depending on the implementation which is not good, will be fixed later.
        // But, still we have pretty flexible code
        this.quackBehavior = new Squeak();
        this.flyBehavior = new FlyNoWay();
    }

    display(): void {
        console.log('Rubber duck representation');
    }
}

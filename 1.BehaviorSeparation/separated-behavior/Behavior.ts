/*
* Defining interfaces for changeable behavior, so we can have multiple implementations
* Instead of creating implementation in the Duck class or in the child classes themselves.
* */
export interface FlyBehavior {
    fly(): void;
}

export interface QuackBehavior {
    quack(): void;
}

export class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log('Flying using wings!');
    }
}

export class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log('Cannot fly :(');
    }
}

export class Quack implements QuackBehavior {
    quack(): void {
        console.log('Quack quack');
    }
}

export class Squeak implements QuackBehavior {
    quack(): void {
        console.log('Squeak squeak');
    }
}

export class MuteQuak implements QuackBehavior {
    quack(): void {
        console.log('Muted...');
    }
}
/*
 * Inheritance is not always a good solution when we want to share some common logic.
 * In this example you can see that we have a Duck abstract class,
 * which defines general methods, and those which should be overridden
 * But methods like quack and fly for example are not suitable for child classes, because some of them cannot perform that actions
 * In that cases we have always override with empty implementation
 * */

abstract class Duck {
  public quack(): void {
    console.log('Quack!');
  }

  public swim(): void {
    console.log('Swimming...');
  }

  public fly(): void {
    console.log('Flying...');
  }

  public abstract display(): void;
}

class MallardDuck extends Duck {
  display(): void {
    console.log('Mallard duck representation');
  }
}

class ReadheadDuck extends Duck {
  display(): void {
    console.log('Readhead duck representation');
  }
}

class RubberDuck extends Duck {
  display(): void {
    console.log('Rubber duck representation');
  }

  // Should squeak instead of quaking!
  quack(): void {
    console.log('Squeak!');
  }

  // Cannot fly
  fly(): void {
    console.log('No flying!');
  }
}

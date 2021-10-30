/*
 * In this case interfaces solves the problem, but creates more issues
 * We cannot reuse a code.
 * If a few ducks have a same manner of quacking or flying we will have to duplicate those methods.
 * */

interface Flyable {
  fly(): void;
}

interface Quackable {
  quack(): void;
}

abstract class Duck {
  public swim(): void {
    console.log('Swimming...');
  }

  public abstract display(): void;
}

class MallardDuck extends Duck implements Quackable, Flyable {
  display(): void {
    console.log('Mallard duck representation');
  }

  fly(): void {
    console.log('Flying!');
  }

  quack(): void {
    console.log('Quack!');
  }
}

class ReadheadDuck extends Duck implements Quackable, Flyable {
  display(): void {
    console.log('Readhead duck representation');
  }

  fly(): void {
    console.log('Flying!');
  }

  quack(): void {
    console.log('Quack!');
  }
}

class RubberDuck extends Duck implements Quackable {
  display(): void {
    console.log('Rubber duck representation');
  }

  quack(): void {
    console.log('Squeak!');
  }
}

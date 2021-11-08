export interface Duck {
  quack(): void;
  fly(): void;
}

export class MallardDuck implements Duck {
  public quack() {
    console.log('Quack!');
  }

  public fly() {
    console.log('Flying!');
  }
}

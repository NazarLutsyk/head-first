import { Duck } from './Duck';
import { Turkey } from './Turkey';

export class TurkeyAdapter implements Duck {
  private turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  public fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }

  public quack(): void {
    this.turkey.gobble();
  }
}

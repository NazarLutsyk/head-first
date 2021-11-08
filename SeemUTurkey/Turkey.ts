export interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WildTurkey implements Turkey {
  public gobble() {
    console.log('Gobble gobble!');
  }

  public fly() {
    console.log('Flying in a short distance!');
  }
}

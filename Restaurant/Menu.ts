import { DinnerMenuIterator, MenuIterator, PancakeMenuIterator } from './Iterator';

export type MenuItem = {
  name: string;
};

export interface Menu {
  createIterator(): MenuIterator;
}

export class DinnerMenu implements Menu {
  private menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = [{ name: 'eggs' }, { name: 'potato' }];
  }

  public createIterator(): MenuIterator {
    return new DinnerMenuIterator(this.menuItems);
  }
}

export class PancakeMenu implements Menu {
  private menuItems: Map<number, MenuItem>;

  constructor() {
    this.menuItems = new Map<number, MenuItem>();
    this.menuItems.set(1, { name: 'Cream Pancake' });
    this.menuItems.set(2, { name: 'Cherry Pancake' });
  }

  public createIterator(): MenuIterator {
    return new PancakeMenuIterator(this.menuItems);
  }
}

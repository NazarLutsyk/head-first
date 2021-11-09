import { MenuItem } from './Menu';

export interface MenuIterator {
  hasNext(): boolean;
  next(): unknown;
}

export class DinnerMenuIterator implements MenuIterator {
  private menuItems: Array<MenuItem>;
  private position: number;

  constructor(menuItems: Array<MenuItem>) {
    this.position = 0;
    this.menuItems = menuItems;
  }

  public hasNext(): boolean {
    return this.menuItems.length > this.position;
  }

  public next(): MenuItem {
    const item = this.menuItems[this.position];
    this.position++;
    return item;
  }
}

export class PancakeMenuIterator implements MenuIterator {
  private menuItems: Map<number, MenuItem>;
  private list: Array<MenuItem>;
  private position: number;

  constructor(menuItems: Map<number, MenuItem>) {
    this.menuItems = menuItems;
    this.list = Array.from<MenuItem>(this.menuItems.values());
    this.position = 0;
  }

  public hasNext(): boolean {
    return this.list.length > this.position;
  }

  public next(): MenuItem {
    const item = this.list[this.position];
    this.position++;
    return item;
  }
}

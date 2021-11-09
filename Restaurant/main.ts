import { DinnerMenu, Menu, PancakeMenu } from './Menu';

const pancakeMenu = new PancakeMenu();
const dinnerMenu = new DinnerMenu();

printMenu(pancakeMenu);
printMenu(dinnerMenu);

function printMenu(menu: Menu): void {
  const menuIterator = menu.createIterator();
  while (menuIterator.hasNext()) {
    console.log(menuIterator.next());
  }
}

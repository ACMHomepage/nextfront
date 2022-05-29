import MenuBase from './Menu';
import MenuItem from './MenuItem';

type MenuType = typeof MenuBase & {
  Item: typeof MenuItem;
};

const Menu: MenuType = Object.assign(MenuBase, { Item: MenuItem });

export default Menu;
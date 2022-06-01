import MenuBase from './Menu';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';

type MenuType = typeof MenuBase & {
  Item: typeof MenuItem;
  Divider: typeof MenuDivider;
};

const Menu: MenuType = Object.assign(MenuBase, {
  Item: MenuItem,
  Divider: MenuDivider,
});

export default Menu;
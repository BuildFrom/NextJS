type NavbarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: NavbarItem[];
};

export default NavbarItem;

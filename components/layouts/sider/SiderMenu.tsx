import React, { useContext } from "react";
import { IMenuItem } from "common/@interface";
import { styled } from "styled";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Link from "next/link";

interface IProps {
  menus: IMenuItem[];
  inlineCollapsed: boolean;
}

const SiderMenu: React.FC<IProps> = ({ menus, inlineCollapsed }) => {
  const printMenuItem = (submenus: IMenuItem[], keyPrefix?: string) => {
    return submenus.map((menu, mi) => {
      const key = `${keyPrefix ? keyPrefix + "_" + mi : mi}`;
      if (menu.submenu) {
        return (
          <SubMenu key={key} icon={menu.icon} title={menu.label}>
            {printMenuItem(menu.submenu, key)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item icon={menu.icon} key={key}>
            <Link href={menu.url}>{menu.label}</Link>
          </Menu.Item>
        );
      }
    });
  };

  return (
    <Menu mode="inline" inlineCollapsed={inlineCollapsed}>
      {printMenuItem(menus)}
    </Menu>
  );
};

const MenuContainer = styled.div``;
const SubMenuContainer = styled.div``;
const MenuItem = styled.div`
  font-size: 12px;
`;

export default SiderMenu;

import React, { useContext } from "react";
import styled from "styled-components";
import { DispatchConfigContext, ConfigContext } from "store/initialConfig";
import { SMixinFlexRow } from "styles/styledMixin";
import { ConfigActionType } from "common/@interface";
import { TeamOutlined } from "@ant-design/icons";
import SiderMenu from "./SiderMenu";

interface IProps {}

const SiderLayout: React.FC<IProps> = () => {
  const config = useContext(ConfigContext);

  return (
    <Sider inlineCollapsed={config.collapsed}>
      <Logo>{config.collapsed ? <TeamOutlined /> : "QueryPie"}</Logo>
      <SiderMenu menus={config.siderMenu} inlineCollapsed={config.collapsed} />
    </Sider>
  );
};

const Sider = styled.div<{ inlineCollapsed?: boolean }>`
  width: ${(p) => (p.inlineCollapsed ? "auto" : "200px")};
  border-right: 1px solid ${(p) => p.theme.border_default};
  background-color: ${(p) => p.theme.aside_bar_bg};
`;

const Logo = styled.div`
  height: 60px;
  color: ${(p) => p.theme.text_color};
  background-color: ${(p) => p.theme.aside_bar_bg};
  ${SMixinFlexRow("center", "center")};
`;

export default SiderLayout;

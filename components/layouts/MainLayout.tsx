import React, { useContext } from "react";
import { SMixinFlexRow, SMixinFlexColumn } from "styles/styledMixin";
import { styled } from "styled";
import { LeftHeader, RightHeader } from "./header";
import SiderLayout from "./sider/SiderLayout";

interface IProps {}
const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Wrap>
      <Layout isRoot={true}>
        <Layout hasSider={true}>
          <SiderLayout />
          <Layout>
            <Header>
              <LeftHeader />
              <RightHeader />
            </Header>
            <Content>{children}</Content>
            <Footer>
              <div>QueryPie Created by CHEQUER</div>
              <div></div>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  font-size: 20px;
`;

const Layout = styled.div<{ isRoot?: boolean; hasSider?: boolean }>`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
  position: relative;

  ${(p) => {
    if (p.isRoot) {
      return `height: 100%;`;
    }
    return ``;
  }}
  ${(p) => {
    if (p.hasSider) {
      return `flex-direction: row;`;
    }
    return ``;
  }}
`;

const Header = styled.div`
  flex: none;
  background-color: ${(p) => p.theme.l_sidebar_bg};
  height: 60px;
  padding-right: 10px;
  padding-left: 20px;

  ${SMixinFlexRow("space-between", "center")};
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 24px;
  background-color: ${(p) => p.theme.body_background};
`;

const Footer = styled.div`
  flex: none;
  height: 30px;
  font-size: 12px;
  padding: 0 20px;
  background-color: ${(p) => p.theme.aside_bar_bg};

  color: ${(p) => p.theme.txt_default};
  ${SMixinFlexRow("space-between", "center")};
`;

export default MainLayout;

import React, { useContext } from "react";
import styled from "styled-components";
import { SMixinFlexRow } from "styles/styledMixin";
import { Button } from "antd";
import { DispatchConfigContext, ConfigContext } from "store/initialConfig";
import { ConfigActionType } from "common/@interface";

interface LeftHeaderProps {}

const LeftHeader: React.FC<LeftHeaderProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);

  const toggleCollapsed = (event) => {
    console.log(config.collapsed);
    dispatchConfig({
      type: ConfigActionType.SET_SIDER_COLLAPSED,
      value: !config.collapsed,
    });
  };

  return (
    <LeftBox>
      <div className="menu-button" onClick={toggleCollapsed}>
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13H8M1 1H17H1ZM1 7H17H1Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </LeftBox>
  );
};

const LeftBox = styled.div`
  font-size: 14px;
  ${SMixinFlexRow("center", "center")};

  .menu-button {
    cursor: pointer;
  }
`;

export default LeftHeader;

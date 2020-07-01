import React, { useContext } from "react";
import { Switch, Dropdown, Button, Menu } from "antd";
import { DispatchThemeContext } from "store/initialConfig";
import { Enums } from "common";
import { styled } from "styled";
import { ThemeContext } from "styled-components";
import { SMixinFlexRow } from "styles/styledMixin";
import SelectLang from "components/SelectLang";

interface IProps {}
const RightHeader: React.FC<IProps> = () => {
  const dispatchTheme = useContext(DispatchThemeContext);

  const handleTheme = (checked) => {
    dispatchTheme({
      type: checked ? Enums.ThemeType.light : Enums.ThemeType.dark,
    });
  };

  return (
    <RightBox>
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        onChange={handleTheme}
      />
      <SelectLang />
    </RightBox>
  );
};

const RightBox = styled.div`
  ${SMixinFlexRow("space-between", "center")}

  button {
    margin-right: 5px;
  }
`;

export default RightHeader;

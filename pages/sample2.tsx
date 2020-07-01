import React, { useContext } from "react";
import Link from "next/link";
import {
  DispatchConfigContext,
  ConfigContext,
  DispatchThemeContext,
} from "store/initialConfig";
import { ConfigActionType } from "common/@interface";
import { Enums } from "common";
import { Button } from "antd";
import styled, { ThemeContext } from "styled-components";
import { MainLayout } from "components/layouts";

interface IProps {}

const App: React.FC<IProps> = () => {
  return <MainLayout>Welcome to Sample Page2</MainLayout>;
};

export default App;

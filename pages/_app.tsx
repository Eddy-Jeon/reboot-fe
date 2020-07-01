import React, { useState, useReducer, useEffect } from "react";
import { NextPage } from "next";
import App, { AppProps } from "next/app";
import axios from "axios";
import { useImmerReducer } from "use-immer";
import {
  ConfigContext,
  DispatchConfigContext,
  DispatchThemeContext,
} from "store/initialConfig";
import { configReducer } from "store/configReducer";
import { themeReducer } from "store/themeReducer";
import { ThemeProvider } from "styled";
import defaultConfig from "store/defaultConfig";
import { IMenuItem } from "common/@interface";
import { Enums } from "common";
import {
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import * as appDark from "styles/less/app-dark.less";
import * as appLight from "styles/less/app-light.less";
import { themePalette } from "styles/theme";

interface IProps {}
const MyApp: NextPage<AppProps & IProps, IProps> = (props) => {
  const { Component, pageProps } = props;
  const [config, dispatchConfig] = useImmerReducer(
    configReducer,
    defaultConfig
  );
  const [theme, dispatchTheme] = useImmerReducer(
    themeReducer,
    Enums.ThemeType.light
  );

  useEffect(() => {
    let appStyle = document.getElementById("appStyle");
    if (!appStyle) {
      appStyle = document.createElement("style");
      appStyle.id = "appStyle";
      document.head.appendChild(appStyle);
    }
    appStyle.innerHTML = (theme === Enums.ThemeType.dark
      ? appDark
      : appLight
    ).toString();
  }, [theme]);

  return (
    <DispatchConfigContext.Provider value={dispatchConfig}>
      <ConfigContext.Provider value={config}>
        <DispatchThemeContext.Provider value={dispatchTheme}>
          <ThemeProvider theme={themePalette[theme]}>
            <Component {...pageProps} />
          </ThemeProvider>
        </DispatchThemeContext.Provider>
      </ConfigContext.Provider>
    </DispatchConfigContext.Provider>
  );
};

// API로부터 초기 설정값을 받아서 화면을 구성해야 하는 경우 사용.
MyApp.getInitialProps = async ({ req }) => {
  // const isServer = !!req;

  const siderMenu: IMenuItem[] = [
    { label: "PIE", icon: <PieChartOutlined />, url: "" },
    { label: "DESKTOP", icon: <DesktopOutlined />, url: "" },
    {
      label: "PARENT",
      icon: <TeamOutlined />,
      url: "",
      submenu: [
        { label: "CHILD 1", url: "" },
        { label: "CHILD 2", url: "" },
      ],
    },
  ];
  const mainMenu = [];

  return axios
    .get("http://apiurl")
    .then((res) => {
      return {};
    })
    .catch((res) => {
      return {};
    });
};

export default MyApp;

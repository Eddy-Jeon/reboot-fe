import { Enums } from "./enums";
import defaultConfig from "store/defaultConfig";

export type IConfig = typeof defaultConfig;

export interface IConfigAction {
  type: ConfigActionType;
  value?: any;
}

export enum ConfigActionType {
  SET_WIDTH = "width",
  SET_HEIGHT = "height",
  SET_SIDER_WIDTH = "siderWidth",
  SET_SIDER_COLLAPSED = "siderCollapsed",
}

export type ConfigReducer = (state: IConfig, action: IConfigAction) => void;

export type ITheme = string;

export interface IThemeAction {
  type: Enums.ThemeType;
}

export type ThemeReducer = (state: ITheme, action: IThemeAction) => ITheme;

export interface IMenuItem {
  label: string;
  sublabel?: string;
  type?: "normal" | "separator";
  icon?: string | React.ReactElement<any>;
  submenu?: IMenuItem[];
  url: string;
}

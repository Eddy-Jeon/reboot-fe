import react from "react";
import { Icon } from "antd";
import { IMenuItem } from "common/@interface";
import {
  PieChartOutlined,
  DesktopOutlined,
  AppstoreOutlined,
  MailOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
const defaultConfig = {
  siderMenu: [
    {
      label: "Workspace",
      icon: <PieChartOutlined />,
      url: "",
      submenu: [
        { label: "CHILD 1", url: "/sample1" },
        { label: "CHILD 2", url: "/sample2" },
      ],
    },
    {
      label: "Connection",
      icon: <DesktopOutlined />,

      url: "",
      submenu: [
        { label: "CHILD 1", url: "/sample1" },
        { label: "CHILD 2", url: "/sample2" },
      ],
    },
    {
      label: "Role",
      icon: <AppstoreOutlined />,

      url: "",
      submenu: [
        { label: "CHILD 1", url: "/" },
        { label: "CHILD 2", url: "/sample1" },
        { label: "CHILD 3", url: "/sample2" },
      ],
    },
    {
      label: "Audit",
      icon: <MailOutlined />,
      url: "",
      submenu: [
        { label: "CHILD 1", url: "/" },
        { label: "CHILD 2", url: "/sample1" },
        { label: "CHILD 3", url: "/sample2" },
      ],
    },
    {
      label: "Application",
      icon: <DesktopOutlined />,

      url: "",
      submenu: [
        { label: "CHILD 1", url: "/" },
        { label: "CHILD 2", url: "/sample1" },
        { label: "CHILD 3", url: "/sample2" },
      ],
    },
    {
      label: "Masking",
      icon: <DesktopOutlined />,

      url: "",
      submenu: [
        { label: "CHILD 1", url: "" },
        { label: "CHILD 2", url: "" },
      ],
    },
    {
      label: "System",
      icon: <ContainerOutlined />,
      url: "",
      submenu: [
        { label: "CHILD 1", url: "" },
        { label: "CHILD 2", url: "" },
      ],
    },
  ] as IMenuItem[],
  mainMenu: [] as IMenuItem[],

  siderWidth: 220,
  siderCollapsedWidth: 50,
  collapsed: false,
  width: 500,
  height: "100vh",
};

export default defaultConfig;

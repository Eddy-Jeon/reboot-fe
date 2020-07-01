import { Menu, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { ClickParam } from "antd/lib/menu";

interface iProps {}
const SelectLang: React.FC<iProps> = () => {
  const changeLocale = ({ key }: ClickParam) => {
    console.log(`Lang: ${key}`);
  };
  const locales = ["ko-KR", "en-US"];
  const languageLabels = {
    "ko-KR": "Korean",
    "en-US": "English",
  };
  const languageIcons = {
    "ko-KR": "🇰🇷",
    "en-US": "🇺🇸",
  };
  const langMenu = (
    <Menu>
      {locales.map((locale) => (
        <Menu.Item key={locale} onClick={changeLocale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{" "}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={langMenu} placement="bottomRight">
      <span style={{ color: "white" }}>
        <GlobalOutlined title="언어" />
      </span>
    </Dropdown>
  );
};

export default SelectLang;

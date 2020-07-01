import theme, { themePalette } from "styles/theme";
import * as styledComponents from "styled-components";

export { theme, themePalette };

const {
  default: styled,
  ThemeProvider,
  withTheme,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  typeof theme
>;

export { styled, ThemeProvider, withTheme, keyframes };

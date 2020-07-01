import { ThemeReducer, IThemeAction } from "../common/@interface";
import { Enums } from "../common";

export const themeReducer: ThemeReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case Enums.ThemeType.light:
      state = Enums.ThemeType.light;
      return state;
    case Enums.ThemeType.dark:
      state = Enums.ThemeType.dark;
      return state;
    default:
      throw new Error();
  }
};

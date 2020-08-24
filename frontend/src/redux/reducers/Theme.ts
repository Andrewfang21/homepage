const PRIMARY_COLOR: string = "#2C3E50";
const SECONDARY_COLOR: string = "#45A9C4";
const FONT_COLOR: string = "#D6D5EC";

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontColor: string;
}

const INITIAL_STATE: Theme = {
  primaryColor: PRIMARY_COLOR,
  secondaryColor: SECONDARY_COLOR,
  fontColor: FONT_COLOR,
};

export const themeReducer = (state: Theme = INITIAL_STATE) => {
  return { ...state };
};

export type FontWeight = {
  extraLight: number;
  light: number;
  normal: number;
  medium: number;
  bold: number;
  black: number;
};

export type CarmaFontWeight = keyof FontWeight;

export type FontColor = {
  light: string;
  medium: string;
  dark: string;
  darkest: string;
  highlight: string;
  white: string;
  success: string;
  warning: string;
  error: string;
};

export type CarmaFontColor = keyof FontColor;

export type FontSize = {
  small: string;
  normal: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};

export type Font = {
  family: string;
  size: FontSize;
  weight: FontWeight;
  color: FontColor;
};

export type Spacing = {
  xxsmall: string;
  xsmall: string;
  small: string;
  normal: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};

export type TeamColor = {
  tnr: string;
  underwriting: string;
  wholesale: string;
  fieldAdvocate: string;
  insideAdvocate: string;
  pdi: string;
  transport: string;
  executiveResolution: string;
  postOps: string;
};

export type CarmaTeamColor = keyof TeamColor;

export type Color = {
  callToAction: string;
  callToActionInteractive: string;
  primary: string;
  primaryInteractive: string;
  background: string;
  foreground: string;
  font: FontColor;
  success: string;
  warning: string;
  warningElevated: string;
  error: string;
  white: string;
  black: string;
  border: string;
  shadow: string;
  transparent: string;
  team: TeamColor;
};

export type CarmaColor = Exclude<keyof Color, 'font' | 'team'>;

export type Breakpoints = {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};

export type CarmaThemeType = CarmaTheme;

export type CarmaTheme = {
  font: Font;
  breakpoints: Breakpoints;
  spacing: Spacing;
  color: Color;
  border: string;
  borderRadius: string;
  boxShadow: string;
  boxShadowDeeper: string;
};

export enum AlignX {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum AlignY {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom',
}

export type Align = `${AlignY} ${AlignX}`;

export type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

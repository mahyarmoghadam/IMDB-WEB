import { BaseColor } from "./enums/base-color.enum";
import { Size } from "./enums/base-size.enum";

export interface BaseStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: Size;
  border?: string;
  text?: string;
  borderRadius?: string;
  borderWidth?: string;
  col?: string;
  display?: string;
  overflow?: string;
  position?: string;
  visibility?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string | number;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  font?: string;
  lineHeight?: string;
  fontStyle?: string;
  fontWeight?: "bold" | "normal" | "lighter" | "bolder";
  textAlign?: string;
  borderColor?: string;
  boxShadow?: string;
  shadowColor?: string;
  opacity?: string;
  transform?: string;
  cursor?: string;
  rotate?: 45 | 90 | 180 | 270 | 360;
}

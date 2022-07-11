import { BaseColor } from './enums/base-color.enum';
import { Size } from './enums/base-size.enum';

export interface BaseStyle {
    backgroundColor?: BaseColor;
    color?: BaseColor;
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
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    fontFamily?: string;
    lineHeight?: string;
    fontStyle?: string;
    fontWeight?: string;
    textAlign?: string;
    borderColor?: string;
    boxShadow?: string;
    shadowColor?: string;
    opacity?: string;
    transform?: string;
    cursor?: string;
}
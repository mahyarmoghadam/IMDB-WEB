export interface ButtonModel extends BaseStyle{
  
}


export interface BaseStyle {
    backgroundColor?: string;
    color?: Variant;
    fontSize?: string;
    border?: string;
    text?: string;
    borderRadius?: string;
    borderWidth?: string;
}


export enum Variant {
    RED,
    YELLOW,
    GREEN,
    BLUE,
}
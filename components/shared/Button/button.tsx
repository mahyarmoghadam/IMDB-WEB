import React, { ReactNode } from "react";
import { ButtonModel } from "./button.model";

export default function Button(props: ButtonModel) {
  return (
    <>
      <button
        // className={`
        //     bg-${props.backgroundColor}
        //     rounded-${props.borderRadius}
        //     border-${props.border}
        //     `}
        className={classNames(
          VARIANT_MAPS[Variant.BLUE],
          SIZE_MAPS[Size.SMALL]
        )}
      >
        {props.text}
      </button>
    </>
  );
}

export function classNames(
  ...classes: (false | null | undefined | string | any)[]
) {
  return classes.filter(Boolean).join(" ");
}

export enum Variant {
  RED,
  YELLOW,
  GREEN,
  BLUE,
}
export enum Size {
  LARGE,
  SMALL,
}
export type Props = {
  variant: Variant;
  children?: ReactNode;
  size: Size;
};
export const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: "px-2.5 text-xs",
  [Size.LARGE]: "px-3 text-sm",
};
export const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.RED]: "bg-red-100 text-red-800",
  [Variant.YELLOW]: "bg-yellow-100 text-yellow-800",
  [Variant.GREEN]: "bg-green-100 text-green-800",
  [Variant.BLUE]: "bg-blue-100 text-blue-800",
};

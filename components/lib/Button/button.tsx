import React, { ReactNode } from "react";
import { ButtonModel } from "./button.model";
import { BaseColor, COLOR_MAPS } from './../../../models/enums/base-color.enum';
import { Size, SIZE_MAPS } from './../../../models/enums/base-size.enum';


export default function Button(props: ButtonModel) {
  const { color, backgroundColor, fontSize } = props
  console.log(fontSize);

  return (
    <>
      <button
        // className={`
        //     bg-${props.backgroundColor}
        //     rounded-${props.borderRadius}
        //     border-${props.border}
        //     `}
        className={classNames(
          COLOR_MAPS[color ? color : BaseColor.BLACK],
          SIZE_MAPS[fontSize ? fontSize : Size.LARGE]
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

Button.defaultProps = {
  color: BaseColor.GRAY,
  fontSize: Size.LARGE,
};

Button.color = BaseColor;
Button.fontSize = SIZE_MAPS;
// export enum Variant {
//   RED,
//   YELLOW,
//   GREEN,
//   BLUE,
// }
// export enum Size {
//   LARGE,
//   SMALL,
// }
// export type Props = {
//   variant: Variant;
//   children?: ReactNode;
//   size: Size;
// };
// export const SIZE_MAPS: Record<Size, string> = {
//   [Size.SMALL]: "px-2.5 text-xs",
//   [Size.LARGE]: "px-3 text-sm",
// };
// export const VARIANT_MAPS: Record<Variant, string> = {
//   [Variant.RED]: "bg-red-100 text-red-800",
//   [Variant.YELLOW]: "bg-yellow-100 text-yellow-800",
//   [Variant.GREEN]: "bg-green-100 text-green-800",
//   [Variant.BLUE]: "bg-blue-100 text-blue-800",
// };

import React, { ReactNode } from "react";
import { ButtonModel } from "./button.model";
import { BaseColor, COLOR_MAPS } from './../../../models/enums/base-color.enum';
import { Size, SIZE_MAPS } from './../../../models/enums/base-size.enum';


export default function Button(props: any) {
  // const { color, fontSize } = props
  return (
    <>
      <button
        className='bg-yellow-300 px-3 py-2 rounded font-sans font-medium'
      // className={classNames(
      //   COLOR_MAPS[color ? color : BaseColor.BLACK],
      //   SIZE_MAPS[fontSize ? fontSize : Size.LARGE]
      // )}
      >
        {props.text}
      </button>
    </>
  );
}

// export function classNames(
//   ...classes: (false | null | undefined | string | any)[]
// ) {
//   return classes.filter(Boolean).join(" ");
// }

// Button.defaultProps = {
//   color: BaseColor.GRAY,
//   fontSize: Size.LARGE,
// };

// Button.color = BaseColor;
// Button.fontSize = SIZE_MAPS;

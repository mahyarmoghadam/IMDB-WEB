import React, { ReactNode } from "react";
import { BaseStyle } from "models/base-style.model";
import clsx from "clsx";
import { BaseColor } from "models/enums/base-color.enum";
import { Size } from "models/enums/base-size.enum";

export interface LabelStyle extends BaseStyle {
  icon?: ReactNode;
  textRotate?: 45 | 90 | 180 | 270 | 360;
  textSize?: Size;
}

export default function Label({
  color,
  padding,
  fontSize,
  rotate,
  font,
  fontWeight,
  width,
  borderRadius,
  icon,
  textRotate,
  text,
  textSize,
  backgroundColor,
}: LabelStyle) {
  const styleBtn = clsx({
    [`text-${color}`]: color,
    [`${padding}`]: padding,
    [`text-${fontSize}`]: fontSize,
    [`rotate-${rotate}`]: rotate,
    [`${font}`]: font,
    [`font-${fontWeight}`]: fontWeight,
    [`w-${width}`]: width,
    [`rounded-${borderRadius}`]: borderRadius,
    [`bg-${backgroundColor}`]: backgroundColor,
  });

  const styleText = clsx({
    [`rotate-${textRotate}`]: textRotate,
    [`text-${textSize}`]: textSize,
  });

  return (
    <>
      <div className={`bg-${backgroundColor}`}>
        <span className="flex justify-center justify-items-center items-center">
          <span className="mr-1">{icon}</span>
          <span className={styleText}>{text}</span>
        </span>
      </div>
    </>
  );
}

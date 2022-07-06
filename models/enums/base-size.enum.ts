export enum Size {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
    XXLARGE
}

export const SIZE_MAPS: Record<Size, string> = {
    [Size.SMALL]: "px-2.5 text-xs",
    [Size.MEDIUM]: "px-3 text-sm",
    [Size.LARGE]: "p-2 text-lg",
    [Size.XLARGE]: "px-5 text-xl",
    [Size.XXLARGE]: "px-6 text-xxl"
};
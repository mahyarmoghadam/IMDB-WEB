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
    [Size.LARGE]: "px-4 text-l",
    [Size.XLARGE]: "px-5 text-xl",
    [Size.XXLARGE]: "px-6 text-xxl"
};
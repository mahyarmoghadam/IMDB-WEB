export enum Size {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
    XXLARGE
}

export const SIZE_MAPS: Record<Size, string> = {
    [Size.SMALL]: "text-xs",
    [Size.MEDIUM]: "text-sm",
    [Size.LARGE]: "text-lg",
    [Size.XLARGE]: "text-xl",
    [Size.XXLARGE]: "text-2xl"
};
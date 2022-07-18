export enum BaseColor {
    RED,
    YELLOW,
    GREEN,
    BLUE,
    GRAY,
    BLACK,
    WHITE,
    PINK
}


export const COLOR_MAPS: Record<BaseColor, string> = {
    [BaseColor.RED]: "bg-red-100 text-red-800 rounded-md border border-zinc-100",
    [BaseColor.YELLOW]: "bg-yellow-100 text-yellow-800 rounded-md border border-zinc-100",
    [BaseColor.GREEN]: "bg-green-100 text-green-800 rounded-md border border-zinc-100",
    [BaseColor.BLUE]: "bg-blue-100 text-blue-800 rounded-md border border-zinc-100",
    [BaseColor.GRAY]: "bg-red-100 text-red-800 rounded-md border border-zinc-100",
    [BaseColor.BLACK]: "bg-BLACK text-BLACK rounded-md border border-zinc-100",
    [BaseColor.WHITE]: "bg-green-100 text-green-800 rounded-md border border-zinc-100",
    [BaseColor.PINK]: "bg-blue-100 text-blue-800 rounded-md border border-zinc-100",
};
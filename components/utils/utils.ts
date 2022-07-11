export function classNames(
    ...classes: (false | null | undefined | string | any)[]
  ) {
    return classes.filter(Boolean).join(" ");
  }
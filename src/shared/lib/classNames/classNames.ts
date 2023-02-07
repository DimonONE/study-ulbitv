export function classNames(
  cls: string,
  mods?: Record<string, boolean | string>,
  additional?: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

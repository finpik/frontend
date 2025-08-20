export const createBiMap = <T extends Record<string, string>>(
  map: T,
): {
  forward: Record<string, string>
  reverse: Record<string, string>
} => {
  const reverse = Object.fromEntries(
    Object.entries(map).map(([label, enumValue]) => [enumValue, label]),
  )

  return {
    forward: map,
    reverse,
  }
}

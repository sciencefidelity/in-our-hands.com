export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const kebabCase = (str: string): string => {
  return str.toLowerCase().split(" ").join("-").replace(/[^a-z0-9-]/g, "")
}

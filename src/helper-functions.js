export function getWords(str, num) {
  return str.split(/\s+/).slice(0, num).join(" ")
}

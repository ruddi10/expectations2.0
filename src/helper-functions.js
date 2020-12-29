export function getWords(str, num) {
  return str.split(/\s+/).slice(0, num).join(" ")
}

export function makeUrl(str, slug) {
  return `http://localhost:8000${str}${slug}`
}

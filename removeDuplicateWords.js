function removeDuplicateWords (s) {
  let splitS = s.split(" ")
  return [...new Set(splitS)].join(" ")
}

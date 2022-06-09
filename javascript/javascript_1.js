var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}

console.log(FilterString("a1b2c3"))



s
function keepOrder(ary, val) {
  let newArray = ary.concat(val).sort(function(a, b){return a - b})
  let indexNewArray = newArray.indexOf(val)
  return(indexNewArray)

}

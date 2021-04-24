function keepOrder(ary, val) {
  let newArray = ary.concat(val).sort()
  let indexNewArray = newArray.indexOf(val)
  return(indexNewArray)
}

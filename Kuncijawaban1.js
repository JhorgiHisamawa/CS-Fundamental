function evenNumbers(array, number) {
  let evenNumber = array.filter(num => num % 2 == 0).slice(-number)
  return evenNumber   
}

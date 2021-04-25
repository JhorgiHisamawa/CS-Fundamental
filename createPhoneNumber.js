function createPhoneNumber(n){

let kurung = []
let kurungdua = []
let kurungtiga = []
  for( let i = 0; i < 3; i++)
  { kurung.push(n[i])}
    for(let i = 3; i < 6; i++)
      { kurungdua.push(n[i])}
    for(let i = 6; i < n.length ; i++)
      { kurungtiga.push(n[i])}
  let kurungduatiga = kurungdua.concat("-",kurungtiga).join("")
  let kurungjadi = kurung.join("")
  return `(${kurungjadi}) ${kurungduatiga}`
}

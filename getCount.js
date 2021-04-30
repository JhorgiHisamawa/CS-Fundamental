function getCount(str) {
  //dijadikan array
  let strA = str.toLowerCase().replace(" ","").split("")
  let strB = []
  //dicari index yang mempunyai vowel
  for(let i = 0; i < strA.length; i++)
  if(strA[i].match(/[aiueo]/g)) strB.push(strA[i])
  //dijumlahkan
  let StrC = 0
  for(let j = 0; j < strB.length;j++)
    StrC ++
   return StrC;
}

//========================atau===========//

function getCount(str) {
  //dijadikan array
  let strA = str.toLowerCase().replace(" ","").split("")
  let strB = []
  //dicari index yang mempunyai vowel
  for(let i = 0; i < strA.length; i++)
  if(strA[i].match(/[aiueo]/g)) strB.push(strA[i])
  //dihitung jumlahnya
  return strB.length
}

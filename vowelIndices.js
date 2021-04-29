//================ maaf telat gajadi nyerah hehe =====================//

function vowelIndices(word){
  let wordLC = word.toLowerCase().split("").map((e)=>e.match(/[aiueoy]/g))
  let indexVowel = []
for(let i = 0; i < wordLC.length ; i++)
   if(wordLC[i] != null) indexVowel.push(wordLC.indexOf(wordLC[i]) + 1)
  return (indexVowel)
  }

function average(scores) {
  let text = 0
  for(let i= 0; i < scores.length ; i++)
    text += scores[i]
  return Math.ceil(text / scores.length)
}

//===================== atau============//

function average(scores) {
 let text = scores.reduce((accumulator,currentValue) => accumulator + currentValue)
  return Math.round(text / scores.length)
}

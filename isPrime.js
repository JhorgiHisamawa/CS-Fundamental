const isPrime = (num) => {
  let pembagi = 0;
  for(let i=1; i <= num; i++){
    if(num%i == 0){
      pembagi++
    }
  }
  if(pembagi == 2){return true
  }else{return false
  }
}


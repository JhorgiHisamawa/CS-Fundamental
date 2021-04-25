function solve(a,b) {   
    let arrResult = [];   
    let cont = 0;   
    for (let i = 0; i < b.length; i++) {
         for (let j = 0; j < a.length; j++) {
            if (b[i] === a [j]) { cont++;
            }     
        } 
    arrResult.push(cont);
cont = 0;
} return arrResult;
}

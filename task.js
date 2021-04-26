function task(w, n, c) {
  
let x = c * n
    switch(w) {
       case "Monday" :
         return `It is ${w} today, James, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
         break;
       case "Tuesday" :
         return `It is ${w} today, John, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
         break;
       case "Wednesday":
         return `It is ${w} today, Robert, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
         break;
       case "Thursday" :
         return `It is ${w} today, Michael, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
         break;
       case "Friday" :
         return `It is ${w} today, William, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
       } 
}

//================================ atau ===============================================//

const task = (w, n, c) => {
  let pekerja = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William'
  };
  
  return `It is ${w} today, ${pekerja[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
};

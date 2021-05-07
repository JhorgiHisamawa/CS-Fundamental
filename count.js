function count (string) {  
  var count = {};
  string.split('').forEach((s)=> {
     if(count[s]){ count[s]++ }else {count[s] = 1}
  });
 return count
}

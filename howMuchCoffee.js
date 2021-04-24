function howMuchCoffee(e) {
  var hitung=0;
  for (var i=0; i<e.length; ++i)
  {
    if (e[i]=='cw' || e[i]=='cat' || e[i]=='dog' || e[i]=='movie')
      hitung++;
    if (e[i]=='CW' || e[i]=='CAT' || e[i]=='DOG' || e[i]=='MOVIE')
      hitung+=2;  
  }
  return hitung>3?'You need extra sleep':hitung;
}

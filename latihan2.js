function balikString(string){
  
    var balikKata='';
    
    for(var i=string.length-1; i>=0; i--){
      balikKata=balikKata+string[i];
    }
    return balikKata;
  }
  
  console.log(balikString('hello world!'));
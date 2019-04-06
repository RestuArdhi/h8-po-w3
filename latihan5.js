/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// Pseudocode
// ( balik dulu - lalu kondisikan )
// buat variable 'tampung' dengan tipe data string
// looping 'kata' dari kanan ke kiri sebanyak jumlah karakter pada 'kata'
// tampung tiap karakternya pada variable 'tampung'
// kodisikan === 
// jika 'tampung' sama dengan 'kata' maka kembalikan nilai true
// jika sebaliknya kembalikan nilai false

function palindrome(kata) {
  // you can only write your code here!
  var output = '';
  for(var i=kata.length-1; i >= 0; i--){
    output += kata[i];
  }
  
  if(output === kata){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false










/*
function palindrome(kata) {
    var arr = kata.split('');
    var balik = arr.reverse();
    var toStrings = balik.join('');
    // console.log(toStrings);
    if(toStrings === kata){
      return true;
    } else {
      return false;
    }
    return toStrings;
    
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log("======================");
console.log(palindrome('blanket')); // false
console.log("======================");
console.log(palindrome('civic')); // true
console.log("======================");
console.log(palindrome('kasur rusak')); // true
console.log("======================");
console.log(palindrome('mister')); // false

*/
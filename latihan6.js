// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

// Code

function angkaPalindrome(num) {
    var hasil = 0;
    var tesPalindrome = false; 
    var cekPalindrome = 0;
    var ubahBentuk = '';
    while(tesPalindrome === false) {
      num++;
      ubahBentuk = num.toString();
      reverse = "";
      for(k = ubahBentuk.length -1; k >= 0; k--) {
        reverse += ubahBentuk[k];
      }
      cekPalindrome = parseInt(reverse);
      if(cekPalindrome == num) {
        tesPalindrome = true;
        hasil = num;
      }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
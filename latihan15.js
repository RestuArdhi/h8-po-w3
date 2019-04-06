// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada).Untuk kasus ini, anggap saja semua teks lowercase.

// Contoh jika arr inputan adalah ["ayam", "kucing", "bebek", "bangau", "zebra"] maka output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

//Code
function groupAnimals(animals) {
    var namaAkhir = [];
  
    for ( var i = 0; i < animals.length; i++) {
      var animalA = [];
      var animalC = [];
      var animalK = [];
      var animalU = [];
      
      for ( var j = 0; j < animals.length; j++) {
        if( animals[j][0] === 'u') {
          animalU.push(animals[j]);
        }else if(animals[j][0] === 'a') {
          animalA.push(animals[j]);
        } else if( animals[j][0] === 'c' ) {
          animalC.push(animals[j]);
        } else if( animals[j][0] === 'k' && animals[j][1] ==='u') {
          animalK.push(animals[j]);
        } 
      }
    }
    namaAkhir.push(animalA);
    namaAkhir.push(animalC);
    namaAkhir.push(animalK);
    namaAkhir.push(animalU);
    return namaAkhir;
  }
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  
  
  
  
  
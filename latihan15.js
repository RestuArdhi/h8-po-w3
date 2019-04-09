// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
function groupAnimals(animals) {
  var tampung = [ [] ];
  var a = 0;
  animals.sort()
  tampung[0].push(animals[0])

  for(var i = 1 ; i < animals.length ; i++){
    if(animals[i][0] === tampung[a][0][0]){ 
      tampung[a].push(animals[i])
    }else{
      a++;
      tampung[a] = [animals[i]]
    }
  }
  return tampung
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]


////// BUAT TES AJA

console.log(groupAnimals(['kelinci', 'lintah', 'zebra', 'unta', 'badak', 'bebek']));
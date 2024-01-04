/*
JavaScript'te bir dizi (array), bir dizi veriyi saklamak için kullanılan bir veri yapısıdır. 
Diziler, sıralı bir liste oluşturmak ve 
bu listedeki her öğeye bir indeks aracılığıyla erişmek için kullanılır.
*/

// Dizi literali kullanarak bir dizi tanımlama
var fruits = ["Elma", "Armut", "Muz", "Çilek"];
console.log(fruits)

// Array constructor'ını kullanarak bir dizi tanımlama
var colors = new Array("Kırmızı", "Yeşil", "Mavi",)
console.log(colors)

// Dizi Elemanlarına Erişim:
// Dizilerdeki elemanlara, elemanın indeksi kullanılarak erişilir. Dizilerin indeksleri 0'dan başlar.
// İlk elemana erişim
console.log(fruits[0]); // "Elma"

// İkinci elemana erişim
console.log(colors[1]); // "Yeşil"


//Dizi Uzunluğu:
//Dizinin uzunluğunu almak için length özelliği kullanılır.

console.log(fruits.length); // 4

//Diziye Eleman Ekleme ve Değiştirme:
// Diziye yeni eleman ekleme
fruits.push("Üzüm");

// İlk elemanı değiştirme
colors[0] = "Turuncu";


/*
Dizi Metotları:
Diziler, bir dizi metodu aracılığıyla çeşitli işlemler gerçekleştirmek için kullanılır. 
Bazı yaygın dizi metotları şunlardır:

push(): Dizi sonuna yeni bir eleman ekler.
pop(): Dizinin sonundaki elemanı kaldırır.
shift(): Dizinin başındaki elemanı kaldırır.
unshift(): Diziye yeni bir eleman ekler.
splice(): Belirli bir indeksten başlayarak belirli sayıda eleman ekler veya kaldırır.
slice(): Belirli bir bölümü kopyalar.
indexOf(): Belirli bir elemanın indeksini bulur.
concat(): İki veya daha fazla diziyi birleştirir.
*/

// Örnek kullanım
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers)

numbers.pop();
console.log(numbers)

numbers.shift();
console.log(numbers)

numbers.unshift(0);
console.log(numbers)

var removedItems = numbers.splice(2, 2);
console.log(numbers)

var slicedItems = numbers.slice(1, 4);
console.log(numbers)

var index = numbers.indexOf(4);
console.log(numbers)

var mergedArray = numbers.concat([7, 8, 9]);
console.log(numbers)



//array'den eleman silme

/*
JavaScript'te bir dizideki bir elemanı silmek için birkaç farklı yöntem bulunmaktadır. İşte bazı örnekler:

1-Array splice() Metodu:
splice() metodu, bir dizide belirli bir konumdan başlayarak 
belirli bir sayıda elemanı siler ve gerekirse yeni elemanlar ekler.
*/
var myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 1); // İndeks 2'den başlayarak 1 elemanı sil
console.log(myArray); // [1, 2, 4, 5]


/*
2-delete Anahtar Kelimesi:
delete anahtar kelimesi, belirtilen dizin numarasındaki elemanı undefined yapar,
ancak diziyi yeniden düzenlemez. 
Bu nedenle, bu yöntem yerine splice() kullanmak genellikle tercih edilir.

*/
var myArray = [1, 2, 3, 4, 5];
delete myArray[2];
console.log(myArray); // [1, 2, undefined, 4, 5]


/*
3-filter() Metodu:
filter() metodu, belirli bir koşulu sağlayan elemanları 
filtreleyerek yeni bir dizi oluşturur. 
Bu sayede istenmeyen elemanları çıkarmış olursunuz.
*/
var myArray = [1, 2, 3, 4, 5];
myArray = myArray.filter(function(value, index) {
  return index !== 2; // İndeks 2'deki elemanı filtrele (silme)
});
console.log(myArray); // [1, 2, 4, 5]


//Nested Arrays
/*
İç içe geçmiş diziler genellikle çok boyutlu veri yapıları oluşturmak
 veya matris benzeri verileri temsil etmek için kullanılır. 
 Özellikle matematiksel hesaplamalar, grafik programlama veya 
 oyun geliştirme gibi alanlarda çok boyutlu diziler sıkça karşılaşılabilir.
*/

// İç içe geçmiş dizilere örnek
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // İç içe geçmiş dizilerde elemanlara erişim
  console.log(matrix[0][0]); // 1
  console.log(matrix[1][2]); // 6
  console.log(matrix[2][1]); // 8


  var mixedArray = [
    ['İstanbul', 16000000],
    ['Ankara', 5500000],
    ['Kırıkkale', 225000],
    ["Bayburt", 82200]
  ];
  
  // Elemanlara erişim
  
  console.log(mixedArray[0][1]); // İstanbulun Nüfusu
  console.log(mixedArray[1][2]); // Ankara'nın Nüfusu
  console.log(mixedArray[2][1]); // Nüfusu 225000 olan şehir
  console.log(mixedArray[3][0]); // Nüfusu 82200 olan şehir






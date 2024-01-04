//Operatörler
//1. Aritmetik Operatörler:

//Toplama
var x = 5;
var y = 3;
var result = x + y;
console.log(result); // 8

//Çıkarma
var x = 5;
var y = 3;
var result = x - y;
console.log(result); // 2

//çarpma
var x = 5;
var y = 3;
var result = x * y;
console.log(result); // 15

//bölme
var x = 6;
var y = 2;
var result = x / y;
console.log(result); // 3

//kalanı bulma
var x = 7;
var y = 3;
var result = x % y;
console.log(result); // 1

//Üs alma

//1. Math.pow() Fonksiyonu:
// 2 üzeri 3'ü hesapla
var result = Math.pow(2, 3);
console.log(result); // Çıktı: 8

//2. Üs Operatörü (**):
// 2 üzeri 3'ü hesapla
var result = 2 ** 3;
console.log(result); // Çıktı: 8







//2. Atama Operatörleri:

//Değer atama
var x = 10;
console.log(x)

//Arttırarak değer atama
var x = 5;
x += 3; // x = x + 3;
console.log(x); // 8

//Azaltarak Değer atama
var x = 5;
x -= 2; // x = x - 2;
console.log(x); // 3

//3.Mantıksal Operatörler

//Mantıksal eşitlik kontrolü yapar
var x = 5;
var y = "5";
console.log(x == y); // true (Değer kontrolü yapar, tipi önemli değil)

//MantıksalDeğer eşitliği kontrolü yapar 
var x = 5;
var y = "5";
console.log(x === y); // false (Değer ve tip kontrolü yapar)

//Mantıksal büyüktür, küçüktür vb.
var x = 10;
var y = 5;
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false

//Mantıksal Eşitlik
var x = true;
var y = false;
console.log(x && y); // false

//mantıksal eşit değillik
var x = true;
console.log(!x); // false




/*
1. if İfadesi:
if ifadesi, belirli bir koşulun doğru olup olmadığını kontrol eder ve 
belirtilen koşul doğru ise ilgili kod bloğunu çalıştırır.
*/

var score = 75;

if (score >= 70) {
  console.log("Başarılı!"); // Koşul doğru olduğu için bu kod bloğu çalıştırılır.
}

/*
2. if-else İfadesi:
if-else ifadesi, bir koşulun doğru olup olmadığını kontrol eder ve
koşul doğruysa bir kod bloğunu, yanlışsa başka bir kod bloğunu çalıştırır.
*/

var age = 18;

if (age >= 18) {
  console.log("Ehliyet alabilirsiniz.");
} else {
  console.log("Ehliyet alamazsınız.");
}


/*3. if-else if-else İfadesi:
Birden fazla koşulu kontrol etmek için
if-else if-else ifadesi kullanılır. İlk doğru olan koşulun kod bloğu çalıştırılır.
*/

var score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Başarısız");
}

/*
4. Ternary Operatörü (? :):
Ternary operatörü, kısa bir şekilde bir koşulu değerlendirir 
ve koşul doğru ise bir değeri, yanlış ise başka bir değeri döndürür.
*/

var age = 20;
var message = (age >= 18) ? "Ehliyet alabilirsiniz." : "Ehliyet alamazsınız.";
console.log(message);



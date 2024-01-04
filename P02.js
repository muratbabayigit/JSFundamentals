//Concatination an Interpolation
/*
String birleştirme (concatenation) ve string içine değer eklemek için iki yaygın yöntem vardır: 
concatenation ve interpolation.
*/

//String Concatenation (Birleştirme):
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

console.log(fullName); // "John Doe"


//String Interpolation (Deyim İçi Eklemek):

//String interpolation, string içinde değişken veya ifadeleri doğrudan eklemeyi sağlar. 
//Modern JavaScript (ES6 ve sonrası) template literals (``) kullanarak string interpolation sağlar.

var firstName = "John";
var lastName = "Doe";
var fullName = `${firstName} ${lastName}`;

console.log(fullName); // "John Doe"
// Bu örnekte, ${} içine yazılan ifade doğrudan string içine eklenir. Bu syntax, 
//string içinde değişken veya ifadeleri daha okunabilir ve temiz bir şekilde eklemek için kullanışlıdır.


//Concatenation ve Interpolation Karşılaştırması:

// Concatenation
var age = 25;
var messageConcat = "My name is " + fullName + " and I am " + age + " years old.";

// Interpolation
var messageInterpolate = `My name is ${fullName} and I am ${age} years old.`;

console.log(messageConcat);
console.log(messageInterpolate);

/*
Bu örnekte, concatenation ve interpolation'un aynı mesajı nasıl oluşturduğunu görebilirsiniz.
Interpolation kullanmak, daha temiz ve okunabilir kod sağlar. 
Bu nedenle, özellikle modern JavaScript projelerinde template literals ve interpolation sıkça tercih edilir.
*/











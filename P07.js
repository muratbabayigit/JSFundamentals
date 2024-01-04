//FUNCTIONS

//1. Fonksiyon Tanımlama ve Çağırma:
//Parametresiz Fonksiyon:
// Fonksiyon tanımlama
function sayHello() {
    console.log("Merhaba!");
  }
  
  // Fonksiyon çağrısı
  sayHello(); // Çıktı: "Merhaba!"

  //Yukarıdaki örnekte sayHello isimli bir fonksiyon tanımlanmış ve bu fonksiyon çağrılmıştır.


  //Parametre Alan Fonksiyon:
  // Fonksiyon tanımlama
function greet(name) {
    console.log("Merhaba, " + name + "!");
  }
  
  // Fonksiyon çağrısı
  greet("Ahmet"); // Çıktı: "Merhaba, Ahmet!"

/*
Bu örnekte greet adlı fonksiyon bir parametre (name) alır 
ve bu parametreyi kullanarak bir mesaj oluşturup ekrana yazdırır. 
Fonksiyon çağrılırken, belirtilen parametre değeri ile çağrılır
*/

//2. Fonksiyon Parametreleri ve Döndürülen Değerler:

// Fonksiyon tanımlama
function addNumbers(a, b) {
    return a + b;
  }
  
  // Fonksiyon çağrısı ve döndürülen değerin kullanımı
  var result = addNumbers(3, 5);
  console.log(result); // Çıktı: 8

  /*
    Bu örnekte addNumbers adlı fonksiyon, iki parametre alır
    (a ve b) ve bu parametrelerin toplamını return ifadesi ile döndürür.    
    Fonksiyon çağrılırken, bu döndürülen değeri bir değişkene atayabilir veya doğrudan kullanabilirsiniz.
    */


    //3. Anonim Fonksiyon İfadesi:

    // Anonim (isimsiz) fonksiyon ifadesi
    var multiply = function(x, y) {
    return x * y;
     };
  
  // Fonksiyon çağrısı
  console.log(multiply(4, 6)); // Çıktı: 24

  /*
  Bu örnekte, multiply adlı değişken, bir fonksiyon ifadesini içerir. 
  Bu tür fonksiyonlara "anonim fonksiyon" denir. Anonim fonksiyonlar
  genellikle başka bir değişkene atanarak veya başka bir fonksiyon içinde kullanılarak kullanılır.
  */


  //4. Arrow (Ok) Fonksiyonları (ES6 ve Sonrası):
// Arrow fonksiyonu
const square = (num) => {
    return num * num;
  };
  
  // Kısa arrow fonksiyonu
  const cube = num => num ** 3;
  
  // Fonksiyon çağrıları
  console.log(square(5)); // Çıktı: 25
  console.log(cube(3));   // Çıktı: 27

  //Arrow fonksiyonları, ES6 (ECMAScript 2015) ve sonrasında tanıtılmıştır. 
  //Daha kısa bir syntaxa sahiptir ve this bağlamını otomatik olarak ele alır.
  //ECMAScript 2015, kısaca ES6 olarak bilinen JavaScript dilinin bir sürümüdür.
  // ES6, 2015 yılında yayınlanan bir standarttır ve JavaScript diline bir dizi
  //yeni özellik ve geliştirmeler ekler. İ


  //5. Fonksiyon Scope:
  // Global scope'da bir değişken
var globalVar = "Ben globalim!";

function scopeExample() {
  // Local (fonksiyon) scope'da bir değişken
  var localVar = "Ben lokalim!";
  console.log(localVar); // Çıktı: "Ben lokalim!"

  // Global scope'daki değişkene erişim
  console.log(globalVar); // Çıktı: "Ben globalim!"
}

// Fonksiyon çağrısı
scopeExample();

//Bu örnekte, globalVar adlı değişken global bir değişkendir ve her yerden erişilebilirken, 
//localVar adlı değişken scopeExample fonksiyonunun içinde tanımlıdır ve 
//sadece bu fonksiyon içinde erişilebilir.
//Bu, değişkenlerin hangi kapsamda (scope) olduğunu anlamamıza yardımcı olan bir konsepttir.


  



  

  

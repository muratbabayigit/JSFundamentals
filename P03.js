/*
OBJECTS
JavaScript'te bir nesne (object), özelliklerin (property) ve metotların (method)
birleşimini içeren bir veri yapısıdır. 
Nesneler, bir anahtar-değer çiftleri koleksiyonunu temsil eder.

*/
// Nesne Oluşturma

// Boş bir nesne oluşturma
var myObject = {};

// Özellikleri olan bir nesne oluşturma
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};


// Nesneleri iç içe kullanma
var employee = {
  name: "Alice",
  job: {
    title: "Software Developer",
    department: "Engineering",
  },
};

//Nesne Özelliklerine Erişim ve Değiştirme:

// Özelliklere erişim
console.log(person.firstName); // "John"
console.log(car.brand); // "Toyota"
console.log(employee.job.title); // "Software Developer"

// Özellikleri değiştirme
person.age = 31;
car.model = "Corolla";
employee.job.title = "Senior Software Developer";

//Yeni Özellik Ekleme ve Silme:

// Yeni özellik ekleme
person.gender = "Male";
car.year = 2022;

// Özellik silme
delete employee.job.department;






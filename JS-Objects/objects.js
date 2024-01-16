console.log("hello, world");
const Person = {
  name: "Bob",
  age: 30,
  favouriteColour: "Red",
};
console.log(Person);
console.table(Person);
console.log(Person.favouriteColour);
console.table(Person.age);
Person.favouriteLocation = "Montenegro";
console.log(Person.favouriteLocation);
console.table(Person);

const Car = {
  make: "Ford",
  model: "Focus",
  colour: "Blue",
  year: 2012,
  price: "£39,000",
};
console.log("The car is advertised as following, you can buy it now! ", Car);

const Book = {
  title: "Narnia",
  author: "Daniel Day Lewis",
  pages: 435,
};
console.log(Book);

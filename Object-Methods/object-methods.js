console.log("hello, world!");
const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
  getAge: function () {
    return person.age;
  },
};
const age = person.getAge();
person.sayHello(person.name);
console.log(age);

console.log(
  `Hello, ${person.name}, you are ${age} years old and your colour of choice is ${person.favouriteColour}`
);

const car = {
  make: "Ford",
  model: "Mondeo",
  Colour: "Red",
  Advert: function () {
    return car.make, car.model, car.Colour;
  },
};
const advert = car.Advert();
console.log(advert);

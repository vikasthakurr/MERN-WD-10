let obj1 = {
  name: "vikas",
  age: 25,
  print: function (city, country) {
    console.log(
      `name is ${this.name} and age is ${this.age} and city is ${city} and country is ${country}`
    );
  },
};
// obj1.print();

let obj2 = {
  name: "akash",
  age: 19,
};

//call method....
// obj1.print.call(obj2, "bangalore", "india");

//apply method
// obj1.print.apply(obj2, ["bangalore", "india"]);

//bind
obj1.print.bind(obj2, "bangalore", "india")();

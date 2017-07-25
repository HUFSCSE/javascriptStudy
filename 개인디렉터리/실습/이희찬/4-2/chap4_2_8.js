function Person(name, age){
  this.name = name;
  this.age = age;
}

var foo = new Person('foo', 30);
console.log(foo.hasOwnProperty('name'));
console.dir(Person.prototype);
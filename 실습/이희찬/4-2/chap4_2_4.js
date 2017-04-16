var Person = function(name, gender){
  this.name = name;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ['name', 'male']);    // == Person.call(foo, 'name', 'male');
console.log(foo);
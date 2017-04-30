//규칙 1
var noReturn = function() {
  console.log('noReturn');
};

var result = noReturn();
console.log(result);
console.log("==========================\n");

//규칙 2
function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;

  return {name:'bar', age:30, gender:'male'};
}

var foo = new Person('foo', 20, 'female');
console.dir(foo);
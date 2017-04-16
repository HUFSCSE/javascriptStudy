function Person(name){
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
};

var foo = new Person('foo');
console.log(foo.getName());   //메서드를 호출한 객체가 foo

Person.prototype.name = 'person';
console.log(Person.prototype.name);  //메서들 호출한 객체가 Person
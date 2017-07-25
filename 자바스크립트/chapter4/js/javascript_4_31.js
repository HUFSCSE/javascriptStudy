function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
//빈 객체 생성
var foo = {};
var bar = {};

Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);
Person.call(bar, 'foo', 30, 'man');
console.dir(bar);
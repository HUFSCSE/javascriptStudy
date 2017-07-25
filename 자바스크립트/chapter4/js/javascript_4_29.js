var foo = {
	name : 'foo',
	age : 35,
	gender : 'man'
};
console.dir(foo);

function Person(name, age, gender, position){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var bar = new Person('bar', '33,', 'woman');
console.dir(bar);
var baz = new Person('baz', '25', 'woman');
console.dir(baz);
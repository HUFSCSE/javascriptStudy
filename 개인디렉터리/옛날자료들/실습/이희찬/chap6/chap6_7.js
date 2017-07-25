function Person(arg){
	this.name = arg;
}

Person.prototype.setName = function(name){
	this.name = name;
};
Person.prototype.getName = function(){
	return this.name;
};

function Student(arg){
	Person.apply(this, arguments);
}

var p = new Person("cola");
Student.prototype = p;

var s = new Student("coffee");
console.log(s.getName());
s.setName("water");
console.log(s.getName());
p.age = 30;
Person.prototype.setAge = function(age){
	this.age = age;
};
Person.prototype.getAge = function(){
	return this.age;
};
console.log(s.getAge());

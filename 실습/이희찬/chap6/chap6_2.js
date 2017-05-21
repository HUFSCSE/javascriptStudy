Function.prototype.method = function(funcName, func){
	this.prototype[funcName] = func;
};

function Person(arg){
	this.name = arg;
}

Person.method("getName", function(){
	return this.name;
});

Person.method("setName", function(arg){
	this.name = arg;
});

var a = new Person("GD");
var b = new Person("TOP");
console.log(a.getName());
console.log(b.getName());
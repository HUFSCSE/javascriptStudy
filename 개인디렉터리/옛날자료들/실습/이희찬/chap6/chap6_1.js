function Person(arg){
	this.name = arg;
	this.getName = function(){
		return this.name;
	};

	this.setName = function(arg){
		this.name = arg;
	};
}

var a = new Person("zico");
console.log(a.getName());
a.setName("aoa");
console.log(a.getName());

var b = new Person("hello");
console.log(b.getName());
b.setName("world");
console.log(b.getName());

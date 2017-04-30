var myObj = {
	name: 'foo',
	sayName: function(){
		console.log(this.name);
	}
};

var otherObj = {
	name: 'bar'
};
otherObj.sayName = myObj.sayName;
myObj.sayName();
otherObj.sayName();

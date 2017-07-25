var Person = function (arg) {
    var name = arg ? arg : "khk";

    this.getName = function () {
    	return name;
	};

	this.setName = function (arg) {
	    name = arg;
	};
};

var me = new Person();
console.log(me);
me.setName("abc");
console.log(me.name);
console.log(me.getName());
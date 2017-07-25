var Person = function(arg){
	var name = arg ? arg : "khk";

	var func = function(){};
	func.prototype = {
		getName : function(){
			return name;
		},
		setName : function(arg){
			name = arg;
		}
	};
	return func;
}();

var me = new Person();
console.log(me);
me.setName("abc");
console.log(me.name);
console.log(me.getName());
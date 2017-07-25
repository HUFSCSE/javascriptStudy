var person = {
    name : "beenzino",
    getName : function () {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
};
   

function create_obj(obj){
	function F(){

	}
	F.prototype = obj;
	return new F();
}

function extend(obj,prop){
	if(!prop){
		prop = obj;
		obj = this;
	}
	for(var i in prop) obj[i] = prop[i];
	return obj;
}

var student = create_obj(person);
var added = {
	setAge : function(age){
		this.age = age;
	},
	getAge : function(){
		return this.age;
	}
};

extend(student, added);

student.setAge(25);
student.setName('1111');
console.log(student.getAge());
console.log(student.getName());
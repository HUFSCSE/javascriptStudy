/*6-14*/
 function subClass(obj) {
    var parent = this === global ? Function : this; //Node.js 의 경우에는 global 을 사용한다
    var F = function () {};

    var child = function () {
        var _parent = child.parent;

        if(_parent && _parent !== Function){
            _parent.apply(this, arguments);
        }

        if(child.prototype._init){
            child.prototype._init.apply(this,arguments);
        }
    };

    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.subClass = arguments.callee;

    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            child.prototype[i] = obj[i];
        }
    }

    return child;
}

var person_obj = {
    _init : function () {
        console.log("person init");
    },
    getName: function () {
        return this._name;
    },
    setName: function (name) {
        this._name = name;

    }
};

var student_obj = {
    _init: function () {
        console.log("student init");
    },
    getName: function () {
        return "Student Name : "+ this._name;

    }
};

var Person = subClass(person_obj); //Person 클래스 정의
var person = new Person(); // person init 출력
person.setName("beenzino");
console.log(person.getName());

var Student = Person.subClass(student_obj); //Student 클래스 정의
var student = new Student(); //person init, student init 출력
student.setName("Dok2");
console.log(student.getName());

console.log(Person.toString()); //Person 이 Function 을 상속받는지 확인
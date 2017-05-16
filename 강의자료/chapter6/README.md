
# Chapter 06. 객체지향 프로그래밍
##### 객체지향 언어의 특성
* 클래스, 생성자, 메서드
* 상속
* 캡슐화

##### 클래스 기반 언어 vs 프로토타입 기반 언어
- 클래스 기반 언어 : 정적 타입의 언어(Java, C++ ), 정확성 안전성 예측성 등에서 장점, 런타임에 바꿀 수 없는 단점
- 프로토타입 기반 언어 : 동적 타입 언어(Javascript), 객체의 자료구조, 메서드 등을 동적으로 바꿀 수 있는 자유로움이 장점 

## 6.1 클래스, 생성자, 메서드
Java, C++ 과 같이 class 라는 키워드로 클래스를 생성하지 않는다.<br>
자바스크립트는 거의 모든 것이 객체이고, 특히 함수 객체로 많은 것을 구현한다!

##### 실습 6-1
```javascript
/*6-1*/
function Person(arg) {
    this.name = arg;

    this.getName = function () {
        return this.name;
    };

    this.setName = function (arg) {
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
```
겉으로는 별 문제 없이 작동하는 것을 볼 수 있다<br>
하지만 각 객체는 공통적으로 사용할 수 있는 함수들을 따로 생성하고 있다(그림6-1)
이는 메모리 자원 낭비를 가져온다. 여기서 활용할 수 있는 자바스크립트의 특성이<br>
***함수 객체의 프로토타입이다***

##### 실습 6-2
```javascript
/*6-2*/
function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.setName = function (arg) {
    this.name = arg;
};

var a = new Person("GD");
var b = new Person("TOP");
console.log(a.getName());
console.log(b.getName());
```
##### 실습 6-3(더글라스 크락포드 방식)
```javascript
/*6-2*/
Function.prototype.method = function (funcName, func) {
    //this.prototype.funcName = func; //error..
    this.prototype[funcName] = func;

};

function Person(arg) {
    this.name = arg;
}

Person.method("getName", function () {
    return this.name;
});

Person.method("setName", function (arg) {
    this.name = arg;
});

var a = new Person("GD");
var b = new Person("TOP");
console.log(a.getName());
console.log(b.getName());
```

## 6.2 상속
자바스크립트는 클래스를 기반으로 하는 전통적인 상속을 지원하지 않는다.<br>
객체 프로토타입 체인을 이용하여 상속을 구현할 수 있다. 크게 두 가지로 구분할 수 있다.

- 클래스 개념 없이 객체의 프로토타입으로 상속을 구현하는 것
- 클래스 기반 전통적인 상속 방식을 흉내 내는 것

### 6.2.1 프로토타입을 이용한 상속

```javascript
/*6-4*/
function create_object(obj){
	function F(){}
	F.prototype = obj;
	return new F();
}
```
create_object() 는 인자로 들어온 객체를 부모로 하는 자식 객체를 생성하여 반환한다.<br>
F.prototype 프로퍼티에 인자로 들어온 객체를 참조한다. 이렇게 반환된 객체는 부모 객체의 
프로퍼티에 접근할 수 있고, 자신만의 프로퍼티를 만들 수 도 있다.<br>
ECMAScript5 에서 Object.create() 함수로 제공되므로, 따로 구현할 필요는 이제 없다.

```javascript
/*6-5*/
var beenzino = {
    name : "beenzino",
    getName : function () {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
};

var dok2 = {
    name : "dok2",
    getName : function () {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
};

function create_obj(obj) {
    function F() {

    }
    F.prototype = obj;
    return new F();
}

var test = create_obj(beenzino);
console.log(test.getName());
var test = create_obj(dok2);
console.log(test.getName());
test.setName("theQ");
console.log(test.getName());
```

##### extend 함수를 통해서 자식 객체만의 함수를 추가해 보자

```javascript
/*6-6*/
var person = {
    name : "beenzino",
    getName : function () {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
};
    

function create_obj(obj) {
    function F() {

    }
    F.prototype = obj;
    return new F();
}

function extend(obj, prop) {
    if(!prop){
        prop = obj;
        obj = this;
    }
    for(var i in prop)  obj[i] = prop[i];
    return obj;
}

var student = create_obj(person);
var added = {
    setAge : function(age) {
        this.age = age;
    },
    getAge : function () {
        return this.age;
    }
};
    
extend(student,added);
    
student.setAge(25);
console.log(student.getAge());
```

##### JQuery 의 extend() 이용
```html
/*6-6-2*/
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script>
    var person = {
        name : "beenzino",
        getName : function () {
            return this.name;
        },
        setName : function(arg) {
            this.name = arg;
        }
    };


    function create_obj(obj) {
        function F() {

        }
        F.prototype = obj;
        return new F();
    }

    jQuery.extend = jQuery.fn.extend = function(obj, prop) {
        if(!prop){
            prop = obj;
            obj = this;
        }
        for(var i in prop)  obj[i] = prop[i];
        return obj;
    };

    var student = create_obj(person);
    var added = {
        setAge : function(age) {
            this.age = age;
        },
        getAge : function () {
            return this.age;
        }
    };

    jQuery.extend(student,added);


    student.setAge(25);
    console.log(student.getAge());

</script>
```

***하지만 이 코드에는 약점이 있다. 바로 얕은 복사(shallow copy)를 의미한다***<br>
즉, 문자 혹은 숫자 리터럴 등이 아닌 객체(배열, 함수 객체 포함)인 경우 해당 객체를 복사하지 않고,
참조한다. 그러므로 보통 extend 함수를 구현하는 경우 대상이 객체일 때는 깊은 복사(deep copy)를 하는 것이 일반적이다. (p.178)

### 6.2.2 클래스 기반의 상속

```javascript
/*6-7*/
function Person(arg) {
    this.name = arg;
}

Person.prototype.setName = function (name) {
    this.name = name;

};
Person.prototype.getName = function () {
    return this.name;

};

function Student(arg) {
    //Person.apply(this, arg); //error
    Person.apply(this, arguments);

}

var p = new Person("cola");
Student.prototype = p;

var s = new Student("coffee");
console.log(s.getName());
s.setName("water");
console.log(s.getName());
p.age = 30;
Person.prototype.setAge = function (age) {
    this.age = age;

};
Person.prototype.getAge = function () {
    return this.age;

};

console.log(s.getAge());
```
현재는 자식 클래스의 객체가 부모 클래스의 객체를 프로토타입 체인으로 직접 접근한다<br>
하지만 부모 클래스의 인스턴스와 자식 클래스의 인스턴스는 서로 독립적일 필요가 있다. 중재자를 통해 해결

```javascript
/*6-8*/
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;

};

function Person(arg) {
    this.name = arg;
}

Person.method("setName", function (name) {
    this.name = name;

});

Person.method("getName", function () {
    return this.name;

});

function Student(arg) {
}
    
function F() {
    
};

F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype; //remove 해도 잘 됨, 이건 머지?

var me = new Student();
me.setName("hello");
console.log(me.getName());

var p = new Person("cola");
p.age = 30;

Person.method("setAge", function (name) {
    this.age = name;

});

Person.method("getAge", function () {
    return this.age;

});

console.log(p.getAge());
console.log(me.getAge());
```
빈 함수의 객체를 중간에 두어 Person 인스턴스와 Student 인스턴스를 서로 독립적으로 만들었다.
이제 Person 함수 객체에서 this에 바인딩되는 것은 Student 의 인스턴스가 접근할 수 없다.

좀 더 나은 코드

```javascript
var inherit = function(Parent, Child){
	var F = function(){};
	return function(Parent, Child){
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.prototype.constructor = Child;
		Child.super = Parent.prototype;
	};

}();
```

```javascript
/*6-8-2*/
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;

};

function Person(arg) {
    this.name = arg;
}

Person.method("setName", function (name) {
    this.name = name;

});

Person.method("getName", function () {
    return this.name;

});

function Student(arg) {
}

var inherit = function(Parent, Child){
    var F = function(){};
    return function(Parent, Child){
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };

}();

inherit(Person, Student);


var me = new Student();
me.setName("hello");
console.log(me.getName());

var p = new Person("cola");
p.age = 30;

Person.method("setAge", function (name) {
    this.age = name;

});

Person.method("getAge", function () {
    return this.age;

});

console.log(p.getAge());
console.log(me.getAge());
```
## 6.3 캡슐화
캡슐화는 멤버 변수와 메서드가 서로 관련된 정보가 되고 클래스가 이것을 담는 하나의 큰 틀이라고 할 수 있다. 여기에서 중요한 것은 정보의 공개 여부이다(정보 은닉). 자바스크립트에서는 private , public 을 지원하지 않지만 정보 은닉이 불가능한 것은 아니다. 클로저를 만들어서 정보 은닉.

```javascript
/*6-9*/
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
```
좀 더 깔끔게 ( 모듈 패턴 )

```javascript
/*6-10*/
var Person = function (arg) {
    var name = arg ? arg : "khk";

    return {
        getName : function () {
            return name;

        },
        setName : function (arg) {
            name = arg;

        }
    };
};

var me = new Person();
console.log(me.getName());
me.setName("abc");
console.log(me.name);
console.log(me.getName());
```

(주의 : 객체를 반환하는 경우 얕은 복사이다. 깊은 복사로 복사본을 만들어서 이용. )

6-10 예제는 Person 함수 객체의 프로토타입에는 접근할 수 없다는 단점이 있다.
이는 Person을 부모로 하는 프로토타입을 이용한 상속을 구현하기가 용이하지 않다는 것을 의미한다.
이를 보완하려면 객체를 반환하는 것이 아닌, 함수를 반환한는 것이 좋다.

```javascript
/*6-12*/
var Person = function (arg) {
    var name = arg ? arg : "khk";

    var func = function () {};
    func.prototype = {
        getName : function () {
            return name;

        },
        setName : function (arg) {
            name = arg;

        }
    };
    return func;
}();

var me = new Person();
console.log(me.getName());
me.setName("abc");
console.log(me.name);
console.log(me.getName());
```

## 6.4 객체지향 프로그래밍 응용 예제
##### subClass 예제

```javascript
/*6-13*/
function subClass(obj) {
    var parent = this === window ? Function : this; //Node.js 의 경우에는 global 을 사용한다
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
```

##### subClass 상속

```javascript
/*6-14*/
 function subClass(obj) {
    var parent = this === window ? Function : this; //Node.js 의 경우에는 global 을 사용한다
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
```

##### 모듈 패턴을 이용한 정보은닉

```javascript
/*6-15*/
function subClass(obj) {
    var parent = this === window ? Function : this; //Node.js 의 경우에는 global 을 사용한다
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

var person = function (arg) {
    var name;

    return {
        _init : function (arg) {
            name = arg? arg : "khk";
        },
        getName: function () {
            return name;
        },
        setName: function (arg) {
            name = arg;

        }
    };
}();

var Person = subClass(person); //Person 클래스 정의
var person = new Person("top");
console.log(person.getName());

var Student = Person.subClass(); //Student 클래스 정의
var student = new Student("son");
console.log(student.getName());
```










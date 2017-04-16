### 4.1 함수 정의 ###
 - 함수 리터럴
 - 함수 선언문
 - 함수 표현식, 기명 함수 표현식
 - Function() 생성자 함수를 통한 함수 생성

### 4.2 함수도 객체다(일급객체) ###
 - 리터럴에 의해 생성
 - 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
 - 함수의 인자로 전달 가능
 - 함수의 리턴값으로 리턴 가능
 - 동적으로 프로퍼티를 생성 및 할당 가능

### 4.2.3 함수 객체의 기본 프로퍼티 ###
 - argument: 함수 호출시 넘긴 인자를 배열 형태로 저장하는것
 - caller: 자신을 호출함 함수
 - length: 인자의 갯수를 length로 갖는다
 - name: 함수의 이름
 - *prototype* : 프로토타입 객체를 가르킨다, 함수 F가 생성자로 사용될때 이 함수를 통해 생성된 객체의 부모역할을 하는 프로토 타입 객체를 가르킨다

### 4.3 함수의 다양한 형태 ###
 - 콜백함수
 - 즉시 실행 함수
 - 내부 함수
 - 함수를 리턴하는 함수

## 4.4 함수 호출과 this ##

#### 4.4.1 argument 객체 ####
 - 함수를 호출할 때 넘겨진 인자(배열형태)
 - length 프로퍼티: 호출할때 넘겨진 인자의 갯수를 의미
 - callee 프로퍼티: 현재 실행중인 함수의 참조값(예제에서는 func)

```
//arguments 객체
function func(arg1, arg2) {
    console.log(arguments);
    console.log("argument: " + arg1, arg2);
    console.log("=======================\n");
    return arg1;
}

func();   //null
func(1);  //인자 < 매개변수
func('a', 'b', 'c');    //인자 > 매개변수

//arguments객체의 프로퍼티 ---> length,  callee
function sum(){
  var result = 0;

  for(var i=0; i<arguments.length; i++){
    result += arguments[i];
  }
  return result;
}
console.log(sum(1,2));
console.log(sum(1,2,3,4,5));
```


#### 4.4.2 호출 패턴과 this 바인딩 ####
 - 자바스크립트에서는 함수가 호출될때에 매개변수로 전달되는 인자값에 더해 arguments객체, this인자가 전달된다
 - 크게 4가지만 기억: 메서드 호출패턴, 함수 호출패턴, 

#### 4.4.2.1 객체의 매서드 호출할 때 this 바인딩(메서드 호출패턴) ####
 - 해당 메서드를 호출한 객체로 바인딩 한다


```
var myObj = {
  name: 'foo',
  sayName: function() {
    console.log(this.name);
  }
};

var otherObj = {
  name:'bar'
};
otherObj.sayName = myObj.sayName;   //동적 프로퍼티(메서드) 생성

myObj.sayName(); //myObj에 this 바인딩
otherObj.sayName(); //otherObj에 this 바인딩
```

#### 4.4.2.2 함수를 호출할 때 this 바인딩(함수호출 패턴) ####
 - 브라우저 환경에서 전역객체: window 객체
 - 자바스크립트 런타임 환경에서의 전역객체: global 객체
 - 자바스크립트의 모든 전역변수는 전역객체의 프로퍼티이다


```
<html>
<body>
    <script>
	
        function func() {
            alert('hello');
        }
		
        func();
        window.func();
    </script>
</body>
</html>
```


```
var value = 100;
var myobj = {
  value:1,
  func1: function(){
    this.value +=1;
    console.log('1 ' + this.value);

    func2 = function (){
      this.value +=1;
      console.log('2 ' + this.value);   //원래는 전역객체 value에 바인딩이 되어야함
	  
      func3 = function (){
        this.value +=1;
        console.log('3 ' + this.value);
      }
      func3();
    }
    func2();
  }
};
myobj.func1();
```


```
var value = 100;
var myobj = {
  value:1,

  func1: function(){
    var that = this;    // this == myobj
    this.value +=1;
    console.log('1 ' + this.value);

    var func2 = function(){
      that.value +=1;
      console.log('2 ' + that.value);

      var func3 = function(){
        that.value +=1;
        console.log('3 ' + that.value);
      }
      func3();
    }
    func2();
  }
};
myobj.func1();
```


#### 4.4.2.3 생성자 함수를 호출할 때 this 바인딩(생성자 함수 호출 패턴) ####
  -> 다음과 같은 순서로 생성자 함수가 호출됨


1. 빈 객체 생성 및 this 바인딩
2. this를 통한 프로퍼티 생성
3. 생성된 객체 반환


```
var Person = function(name){
  this.name = name;
  //console.log(this);    //Person 객체에 바인딩
}

var me = new Person('me');    //부모함수를 Person으로 둔 새로운 객체 생성
console.log(me.name);
```

#### 객체 리터럴, 생성자 함수 방식 차이 ####


```
//객체 리터럴 방식
var foo = {
  name:'foo',
  gender: 'male'
}
console.dir(foo);

//생성자 함수 방식
var Person = function(name, gender){
  this.name = name;
  this.gender = gender;
}

var me = new Person('sangjin', 'male');
console.dir(me);    //부모함수명
```


#### Scope-Safe Constructor


```
function A(arg){

  if(!(this instanceof arguments.callee))
  return new arguments.callee(arg);

  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
```


####  4.4.2.4 call과 apply 메서드를 이용한 명시적인 this바인딩(apply,call 호출패턴) ####
 - apply(thisArg, argArray)
 - call(thisArg, arg)


```
var Person = function(name, gender){
  this.name = name;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ['name', 'male']);    // == Person.call(foo, 'name', 'male');
console.log(foo);
```


 - Arrpay.prototype.slice(start, end): start부터 end-1까지의 배열요소를 리턴한다, 아무것도 쓰지않거나 0을쓰면 전체 배열 요소 리턴


```
function convert(){
  console.log(arguments);
  var arr = Array.prototype.slice.apply(arguments);

  console.log(arr);
  return arr;
}

convert(1,2);
```


```
function Person(name){
  this.name = name;
}

Person.prototype.doSomething = function(callback){
  if(typeof callback == 'function'){
    callback(); //일반 함수 호출
  }
};

function foo(){
  console.log(this.name);
  console.log(this);
}

var p = new Person('pp');
p.doSomething(foo);
```


```javaScript
function Person(name){
  this.name = name;   //Person객체에 있는 name에다가 name을 할당
}

function Person2(name2){
  this.name = "aa";
}

Person2.prototype.doSomething = function(callback) {
  if(typeof callback == 'function'){
    callback.call(this);    //call()함수를 써서 this에 바인딩시킴
  }
};

function foo(){
  console.log(this.name);
  console.log(this);
}

var p = new Person2('pp');
p.doSomething(foo);
```


### 4.4.3 함수 리턴: 자바스크립트는 항상 리턴값을 반환 한다 ###
 - 규칙 (1): 일반 함수나 메서드는 리턴값을 지정하지 않을경우, undefined 가 리턴된다
 - 규칙 (2) : 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴 된다.

```
//규칙 1
var noReturn = function() {
  console.log('noReturn');
};

var result = noReturn();
console.log(result);
console.log("==========================\n");

//규칙 2
function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;

  return {name:'bar', age:30, gender:'male'};
}

var foo = new Person('foo', 20, 'female');
console.dir(foo);
```


### 4.5 프로토타입 체이닝 ###
 - 자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있다.
 - ECMAScript에서는 이러한 링크를 **암묵적 프로토타입링크** 라고한다


```
//prototype 프로퍼티와 [[Prototype]] 링크 구분
function Person(name){
this.name = name;
}

var foo = new Person('foo');

console.dir(Person);
console.dir(foo);
```


#### 4.5.2 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝


```
var myObj = {
  name: 'foo',
  sayName: function(){
    console.log("my name is " + this.name);
  }
};
myObj.sayName();

console.log(myObj.hasOwnProperty('name')); 
//자바스크립트 표준 API 함수

console.log(myObj.hasOwnProperty('nickname'));
//myObj.sayNickName();  //생성되지 않은 메서드
```


#### 4.5.3 생성자 함수로 생성된 객체의 프로토타입 체이닝 ####


```
function Person(name, age){
  this.name = name;
  this.age = age;
}

var foo = new Person('foo', 30);
console.log(foo.hasOwnProperty('name'));
console.dir(Person.prototype);
```


#### 4.5.4 프로토타입 체이닝의 종점
 - 객체리터럴 방식 이든, 생성자 함수호출 방식이든 결국엔 Object.protype 이 프로토타입 체이닝의 종점이다.
 - 결국 모든 자바스크립트 객체는 Object.prototype 의 프로퍼티나 메서드를 공유할수 있다.


#### 4.5.5 기본데이터 타입 확장 ####
 - 자바스크립트에서 쓰는 여러가지 자료형 --> 숫자(Number.prototype),문자열(String.prototype), 배열(Array.prototype)등 에 저장되어 있다.
 - 물론 이러한 기본 내장 프로토타입 또한 Object.prototype을 자신의 프로토타입으로 가지고 있기 때문에 프로토타입 체이닝으로 연결된다.
 - 또한, 이러한 표준 빌트인 객체에도 사용자가 직접 메서드나, 프로퍼티를 추가할수 있다.


```
String.prototype.testMethod = function (){
  console.log('this is testMethod');
};

var str = 'this is str';
str.testMethod();

console.dir(String.prototype);
```


#### 4.5.6 프로토타입도 자바스크립트 객체이다 ####

```
function Person(name){
  this.name = name;
}

var foo = new Person('foo');
//foo.sayHello();

Person.prototype.sayHello = function(){
  console.log('hello');
};

foo.sayHello();
```

#### 4.5.7 프로토타입 메서드와 this 바인딩
 - 4.4.2.1에서 설명한 this바인딩 규칙을 그대로 따른다.
 - 메서드 호출 패턴에서의 this는 그 메서드를 호출한 객체에 바인딩된다.

```
function Person(name){
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
};

var foo = new Person('foo');
console.log(foo.getName());   //메서드를 호출한 객체가 foo

Person.prototype.name = 'person';
console.log(Person.prototype.name);  //메서들 호출한 객체가 Person
```
























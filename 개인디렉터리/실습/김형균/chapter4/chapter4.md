### 4장 정리

#### 4.1 함수 정의
##### 함수 선언문
- 함수 선언문 방식은 반드시 함수명이 정의되어 있어야 한다
```javascript
function add(x, y){
	return x+y;
}
console.log(add(10,10));
```

##### 함수 표현식
- 함수도 하나의 값처럼 취급된다 -> 일급 객체 라고 함 -> 함수도 변수에 할당 가능 -> 함수 표현식
- 익명 함수 
```javascript
var add = function (x, y){
	return x + y;
};

var plus = add;
console.log("3+4 = " + add(3,4));
console.log("5+6 = " + plus(5,6));
```
- 기명 함수
```javascript
var factorialVar = function factorial(n){
	if(n <= 1){
		return 1;
	}
	return n * factorial(n-1);
};
console.log("factorialVar(3) : " + factorialVar(3));
console.log(factorial(3)); // ReferenceError: factorial is not defined
```

##### 함수 호이스팅
- 함수 선언문 형태로 정의한 함수는
함수의 유효범위는 코드의 맨 처음부터 시작한다
- 개별적으로 사용할 때에는 함수 표현식으로 사용해야 한다
```javascript
console.log("2 + 3 = " + add(2, 3)); // 1
function add(x, y){ // 2
	return x + y;
}
console.log("3 + 4 = " + add(3, 4)); // 3
```

```javascript
console.log("2 + 3 = " + add(2, 3)); //TypeError: add is not a function
var add = function (x, y){
	return x + y;
}
console.log("3 + 4 = " + add(3, 4));
```

####4.2 함수도 객체다
- 함수도 일급 객체이다
- 리터럴에 의해 생성
- 동적으로 프로퍼티를 생성 및 할당 가능
- 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능(배열도 가능)
```javascript
var obj={};
obj.plus = function (x,y) {
    return x+y;
};
console.log(obj.plus(10,10));
```
- 함수의 인자로 전달 가능
```javascript
//함수 표현식으로 foo() 함수 생성
var foo = function(func){ 
	func(); // 인자로 받은 func()함수 호출
};

// foo() 함수 실행
foo( function(){ 
	console.log('Function은 인자로 사용될 수 있다.');
});
```

- 함수의 리턴값으로 리턴 가능
```javascript
var foo = function () {
    return function () {
        console.log("return value");
    };
};
var tee = foo();
tee();
```

##### 함수 객체의 기본 프로퍼티
- 모든 함수 객체는 length, prototype 프로퍼티를 가진다
- 모든 함수의 부모 객체는 Function.prototype 객체이다
- constructor 프로퍼티,
  toString() 메서드,
  apply(thisArg, argArray) 메서드,
  call(thisArg, [, arg1[,arg2,]]) 메서드,
  bind(thisArg, [, arg1[,arg2,]]) 메서드

length 프로퍼티
- 기대되는 인자의 개수를 나타낸다
```javascript
function f1() {
    return 0;
}
function f2(x) {
    return x;
}
function f3(x,y) {
    return x+y;
}
console.log('func1.length - ' + f1.length);
console.log('func2.length - ' + f2.length);
console.log('func3.length - ' + f3.length);
```

##### 함수의 다양한 형태

콜백 함수
- 코드를 통해서 호출하는 함수가 아니다. 이벤트가 발생하거나 특점 시점에 도달했을 때 시스템에서 호출되는 함수이다
```javascript
window.onload = function () {
    alert("hello world!");
};
```

즉시 실행 함수
- 함수 정의와 동시에 실행되는 함수를 즉시 실행 함수라고 한다
```javascript
(function (){ console.log("즉시 실행 함수")})();
(function (x){ console.log("즉시 실행 함수+인자 = "+ x)})("hi");    
```

내부 함수
- 함수 내부에 정의된 함수를 내부함수라고 한다
- 부모 함수 코드에서 외부에서의 접근을 막고
독립적인 헬퍼 함수를 구현하는 용도로 사용된다
- 스코프 체이닝
```javascript
function parent() {
    var a= 100;
    var b= 200;
    function child() {
        var b = 300;
        var c = 123;
        console.log(a); //100
        console.log(b); //300
    }
    child();

    console.log(a); //100
    console.log(b); //200
    //console.log(c); //Uncaught ReferenceError: c is not defined
}
parent();
//child(); //Uncaught ReferenceError: child is not defined
```
- 클로저
```javascript
function parent(){
    var a = 100;
    var child = function(){
        console.log(a); //100
    };
    return child;
}
var inner = parent();
inner(); // 100
```

- 함수를 리턴하는 함수
```javascript
var self = function () {
    console.log("in self");
    return function () {
        console.log("return value");
    }
};
var tt = self(); //in self
tt(); //return value
```

##### 함수호출과 this

arguments 객체
- 함수를 호출할 때 인자를 정확하게 넘기지 않아도
에러가 발생하지 않는다
- 인자들은 arguments 객체에 저장된다
- length 프로퍼티 : 호출할 때 넘겨진 인자의 개수
- callee 프로퍼티 : 현재 실행 중인 함수의 참조값
- arguments 객체는 배열이 아니기 때문에
배열 메소드를 사용하면 에러가 난다!!
but 사용 방법은 있다(call, apply)

```javascript
function arg_func(a,b) {
    console.log(a,b);
}
arg_func();
arg_func(1);
arg_func(1,2);
arg_func(1,2,3);
```

```javascript
console.log("arguments length");
function sum() {
    var result = 0;
    for(var i in arguments){
        result += arguments[i];
    }
    return result;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));
```







- function() 생성자 함수

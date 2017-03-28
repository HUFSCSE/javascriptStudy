
[TOC]


## Chapter 04. 함수와 프로토타입 체이닝
자바스크립트에서 중요한 개념 1순위? 함수
* 함수 생성
* 함수 객체
* 다양한 함수 형태
* 함수 호출과 this
* 프로토타입과 프로토타입 체이닝

### 4.1 함수 정의
함수를 생성하는 방법 3가지
1. 함수 선언문(function statement)
2. 함수 표현식(function expression)
3. function() 생성자 함수

같은 함수를 생성하지만 각각의 방식에 따라 미묘한 차이가 있다.

#### 4.1.1 함수 리터럴
함수 = 일반객체 -> 함수 리터럴을 이용해서 함수를 생성한다.

```javascript
/*4-1*/
function add(x, y){
	return x+y;
}
```
```
function : 함수 리터럴은 function 키워드로 시작한다.
add : 함수명. 꼭 있어야 하는 것은 아님(익명함수)
(x, y) : 매개변수 리스트. 자료형을 기술하지 않는다.
{return x + y;} : 함수 호출시 실행되는 코드 부분
```
### 4.1.2 함수 선언문 방식으로 함수 생성하기
함수 선언문 방식은 반드시 함수명이 정의되어 있어야 함
```javascript
/*4-2*/
function add(x, y){
	return x+y;
}
console.log("3 + 4 = " + add(3,4));
```
`
결과값 : 
3 + 4 = 7
`
### 4.1.3 함수 표현식 방식으로 함수 생성하기
함수도 하나의 값처럼 취급된다 -> 일급 객체 라고 함 -> 함수도 변수에 할당 가능 -> **함수 표현식**
```javascript
var add = function (x, y){
	return x + y;
};

var plus = add;
console.log("3+4 = " + add(3,4));
console.log("5+6 = " + plus(5,6));
```
`
3+4 = 7
`
`
5+6 = 11
`
1. 익명함수이다.
2. add 변수는 함수를 참조하는 변수일뿐 함수명이 아니다
3. add는 함수의 참조값을 가지므로 다른 변수에 할당 가능하다.

add함수변수와 plus함수변수는 같은 익명함수를 바라본다.

**익명함수(anonymous function)** : 이름이 없는 함수 형태
**익명 함수 표현식** : 익명함수를 변수에 할당한 것
익명함수의 호출 역시 ()를 붙임

함수 이름이 포함된 함수 표현식 ? **기명 함수 표현식**

```javascript
/*4-3*/
var add = function sum(x, y){
	return x + y;
}
console.log("3+4 = " + add(3,4)); // 출력값 : 7
console.log(sum(3,4)); // ReferenceError: sum is not defined
```
`
3+4 = 7
`
`
ReferenceError: sum is not defined
`

**함수표현식에서 사용된 함수 이름은 외부 코드에서 접근 불가능**

그럼 4-1에서 함수는 어떻게 호출되는지 의문을 가져아함.
```javascript
/*4-1*/
function add(x, y){
	return x+y;
}
```
위의 형태가 자바스크립트 엔진에 의해 다음과 같은 함수표현식으로 변경됨
```javascript
var add = function add(x, y){
	return x+y;
};
```
함수 이름으로 호출되는 것 처럼 보이지만. 실제로는 함수변수에 의해 외부에서 호출이 가능한것.
이런 함수 이름을 이용하면 함수 코드 내부에서 함수 이름으로 함수의 재귀호출 처리가 가능하다.
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
`
factorialVar(3) : 6
`
`
ReferenceError: factorial is not defined
`

*왜 6이 나올까?*
==희찬님의 설명으로 보충==

### 4.1.4 Function() 생성자 함수를 통한 함수 생성하기

**Function()**이라는 기본 내장 생성자 함수로부터 생성된 객체
보통 함수 리터럴 방식으로 함수를 생성하지만 내부적으로는 Function() 생성자 함수로 함수가 생성되는 것이다.
```
new Function(arg1, arg2, ... argN, functionBody)

* arg1, arg2,..,argN - 함수의 매개변수
* functionBody - 함수가 호출될 때 실행될 코드를 포함한 문자열
```
이방식을 사용한 add() 함수는 아래와 같음
```javascript
/*4-5*/
var add = new Function('x', 'y', 'return x + y');
console.log("3 + 4 = " + add(3, 4));
```
일반적으로 Function() 생성자 함수를 사용한 함수 생성 방법은 자쥬 사용되지 않는다.

### 4.1.5 함수 호이스팅
함수를 생성하는 3가지 방법의 차이
```javascript
/*4-6*/
console.log("2 + 3 = " + add(2, 3)); // 1
function add(x, y){ // 2
	return x + y;
}
console.log("3 + 4 = " + add(3, 4)); // 3
```
결과
```
2 + 3 = 5
3 + 4 = 7
```

*왜 첫번째 함수가 실행이 되는지 의문점을 가져야 함*

1번 시점에서 add() 함수가 정의되지 않았음에도 불구하고 에러없이 호출이 가능하다.
-> 함수 선언문 형태로 정의한 함수의 유효범위는 코드의 맨 처음부터 시작한다.
이것이 **호이스팅**이다

>함수 호이스팅은 함수를 사용하기전에 반드시 선언해야한다는 규칙을 무시하므로
>코드의 구조를 엉성하게 만들 수도 있다 그러므로 함수 표현식 사용을 권장하고 있다.

```javascript
/*4-7*/
console.log("2 + 3 = " + add(2, 3));
var add = function (x, y){
	return x + y;
}
console.log("3 + 4 = " + add(3, 4));
```
```
TypeError: add is not a function
```
**  함수 호이스팅이 발생하는 원인은 변수생성(Instantiation)과 초기화(Initialization)의 작업이 분리되서 진행되기 때문이다.**

## 4.2 함수 객체 : 함수도 객체다
### 4.2.1 자바스크립트에서는 함수도 객체다

자바스크립트에서는 **함수도 객체**다. 
기본 기능인 코드 실행뿐만 아니라. 함수 자체가 일반 객체처럼 프로퍼티들을 가질 수 있다는 것이다.
```javascript
/*4-8*/
function add(x, y){
	return x + y;
}
add.result = add(3,2);
add.status = 'OK';
console.log(add.result);
console.log(add.status);
```

함수를 생성할 때 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에 자동으로 저장된다 - ECMAscript 명세서
### 4.2.2 자바스크립트에서 함수는 값으로 취급된다.
함수도 일반 객체처럼 취급될 수 있다.
* 리터럴에 의해 생성
* 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
* 함수의 인자로 전달 가능
* 함수의 리턴값으로 리턴 가능
* 동적으로 프로퍼티를 생성 및 할당 가능

**일급객체**라고 한다
*일급객체란? 프로그래밍 언어 분야에서 쓰는용어로 위의 나열한 기능이 모두 가능한 객체*

#### 4.2.2.1 변수나 프로퍼티의 값으로 할당
```javascript
/*4-9*/
//변수에 함수 살당
var foo = 100;
var bar = function(){ return 100; }
console.log(bar()); // 출력값 100

//프로퍼티에 함수 할당
var obj = {};
obj.baz = function(){ return 200; }
console.log(obj.baz()); // 출력값 200
```
프로퍼티에도 함수가 할당 가능하다.
물론 배열에도 할당이 가능하다. 배열에 할당해보세요- 과제
####4.2.2.2 함수 인자로 전달
```javascript
/*4-10*/
//함수 표현식으로 foo() 함수 생성
var foo = function(func){ // 1
	func(); // 인자로 받은 func()함수 호출
};
// foo() 함수 실행
foo(function(){ // 2
	console.log('Function은 인자로 사용될 수 있다.');
});
```
```
2번 foo() 함수를 실행하는데 functiuon(){..}을 인자로 넘겨준다
1번 인자를 func로 받는다
```
*인자(argument), 매개변수(parameter)의 차이?*

#### 4.2.2.3 리턴값으로 활용
*return에 대한 설명*
```javascript
/*4-11*/
var foo = function(){
	return function(){
		console.log('return value');
	};
};

var bar = foo();
bar();
```
```
결과값 : return value
```
### 4.2.3 함수 객체의 기본 프로퍼티
함수는 객체이다
일반객체와는 다르게 함수 객체만의 표준 프로퍼티가 정의되어 있다.
```javascript
function add(x, y){
	return x + y;
}
console.dir(add);
```
결과
![](https://raw.githubusercontent.com/yiheechan/javascriptStudy/master/%EA%B0%95%EC%9D%98%EC%9E%90%EB%A3%8C/chapter4/img/4-6.PNG)

ECMA5 스크립트 명세서 : 모든 함수는 length, prototype 프로퍼티를 가져아한다.
모든 함수의 부모 객체는 Function.prototype 객체 이다.
* constructor 프로퍼티
* toString() 메서드
* apply(thisArg, argArray) 메서드
* call(thisArg, [, arg1[,arg2,]]) 메서드
* bind(thisArg, [, arg1[,arg2,]]) 메서드

#### 4.2.3.1 length 프로퍼티
표준 프로퍼티로서 함수거 정상적으로 실행될 때 기대되는 **인자의 개수**를 나타낸다.
```javascript
function func0(){

}
function func1(x){
	return x;
}
function func2(x, y){
	return x + y;
}
function func3(x, y, z){
	return x + y + z;
}
console.log('func1.length - ' + func0.length);
console.log('func1.length - ' + func1.length);
console.log('func1.length - ' + func2.length);
console.log('func1.length - ' + func3.length);
```
```
func1.length - 0
func1.length - 1
func1.length - 2
func1.length - 3
```
#### 4.2.3.2 prototype 프로퍼티

모든 함수는 객체이고 **prototype 프로퍼티**를 가지고 있다.
모든 객체의 부모를 나타내는 내부 프로퍼티인 [[Prototype]] (\_proto\_) 와는 다른것임

*이게 무슨말??? 나중에설명*

* 함수가 생성될 때 만들어진다.
* constructor 프로퍼티 하나만 있는 객체를 가리킨다.
* 함수생성될 때 함수 자신과 연결된 프로토타입 객체를 동시에 생성한다.

```
프로토타입 객체는 일반적으로 따로 네이밍하지 않는다. 자신과 연결된 함수의 prototype 프로퍼티값을 그대로 이용한다.
ex) add() 함수의 프로토타입 객체는 add.prototype 이다.
```

## 4.3 함수의 다양한 형태
### 4.3.1 콜백 함수
자바스크립트에서 함수의 이름은 꼭 붙이지 않아도 된다.  -> 함수의 이름을 지정하지 않아도 함수가 정의된다. -> **익명 함수**
이런 익명함수의 대표적인 용도가 콜백 함수 이다.

코드를 통해서 호출하는 함수가 아니다. 이벤트가 발생하거나 특점 시점에 도달했을 때 시스템에서 호출되는 함수이다.
```html

<!DOCTYPE html>
<html><body>
	<script>
    /*4.15*/
		window.onload = function(){
			alert('콜백함수 입니다.');
		};
	</script>
</body></html>
```
window.onload -> 페이지 로딩이 끝난 시점

1. 개발자가 함수를 등록했음.
2. 이벤트 발생.
3. 이벤트 핸들러가 함수 호출.
4. 함수실행(콜백함수)

### 4.3.2 즉시 실행 함수
함수의 정의와 동시에 실행되는 함수를 **즉시 실행 함수**라고 한다.

```javascript
(function (name){
	console.log('즉시 실행함수입니다 -> ' + name);
})('foo');
```
같은 함수를 다시 호출할 수 없다.
그렇기때문에 **최초 한번의 실행만을 필요로하는 초기화 코드 부분 등에서 사용** 할 수 있다.

### 4.3.3 내부 함수
함수 내부에 정의돈 함수를 **내부함수(inner function)** 이라고 한다.
부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수를 구현하는 용도로 사용한다.
*무슨소린지? 몰라도됨 나중에 배움*

```javascript
function parent(){
	var a = 100;
	var b = 200;

	function child(){
		var b = 300;

	console.log(a);
	console.log(b);
	}
	child();
}
parent();
child();
```

parent() 함수 내부에 child() 내부 함수를 정의했음.

**내부 함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다**
* child() 내부 함수에 변수 a가 선언되지 않았지만 출력이 된다.
* 변수 b는 child() 함수에 선언되어 있으므로 parent()의 변수 b가 아닌 child()의 변수 b가 출력된다.

어떻게 이것이 가능한지? **스코프 체이닝** 때문
*나중에 배움니다 *

**내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출 가능하다**

* 기본적으로 함수 스코프 밖에서는 함수 스코프 안에 선언된 모든 변수나 함수에 접근이 불가능하다.
* 함수 내부에서는 함수 밖에서 선언된 변수나 함수의 접근이 가능함 -> 스코프 체이닝

But! 함수 외부에서도 특정 함수 스코프 안에 선언된 내부 함수를 호출 할 수 있다.
(부모함수에서 내부함수를 리턴)
```javascript
function parent(){
	var a = 100;
	var child = function(){
		console.log(a);
	}
	return child;
}
var inner = parent(); // 1
inner(); // 2
```
`
100
`
1. parnet 함수가 실행된 리턴값이 inner변수에 child 리턴이됨.
2. 리턴된 child를 실행

실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner()함수를 **클로저**라고 한다

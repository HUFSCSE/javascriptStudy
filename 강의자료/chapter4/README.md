
# Chapter 04. 함수와 프로토타입 체이닝
자바스크립트에서 중요한 개념 1순위? 함수
* 함수 생성
* 함수 객체
* 다양한 함수 형태
* 함수 호출과 this
* 프로토타입과 프로토타입 체이닝

## 4.1 함수 정의
함수를 생성하는 방법 3가지
1. 함수 선언문(function statement)
2. 함수 표현식(function expression)
3. function() 생성자 함수

같은 함수를 생성하지만 각각의 방식에 따라 미묘한 차이가 있다.

### 4.1.1 함수 리터럴
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

#### 4.2.2.2 함수 인자로 전달
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

실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner()함수를 **클로저**라고 한다.
### 4.3.2 함수를 리턴하는 함수
일반 값처럼 함수 자체를 리턴할 수도 있다.
```javascript
/*4-20*/
var self = function(){
	console.log('a');
	return function(){
		console.log('b');
	}
}
self = self();
self();
```
```
a
b
```
* 첫번째 self함수 호출에서 a가 출력된다.
* 리턴값이 변수 self 에 저장된다.
* 두번째 self함수는 b가 출력된다.

## 4.4 함수 호출과 this
### 4.3.1 arguments 객체
함수를 호출할 때 함수 형식에 맞춰 인자를 넘기지 않아도 에러가 발생하지 않는다.
```javascript
/*4-21*/
function func(arg1, arg2){
	console.log(arg1, arg2);
}
func();
func(1);
func(1,2);
func(1,2,3);
```
```
undefined undefined
1 undefined
1 2
1 2
```
* 넘겨지지 않은 인자에는 undefined가 할당된다.
* *그러면 정의된 인자보다 많게 함수를 호출하면?*
* arguments 객체는 함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 객체를 의미한다.
* 실제 배열이아닌 **유사 배열 객체**이다.

```javascript
function add(a, b){
	console.dir(arguments);
	return a + b;
}
console.log('add1 = ' + add(3));
console.log('add1,2 = ' + add(3, 6));
console.log('add1,2,3 = ' + add(3, 6, 9));
```
arguments 객체는 다음과 같이 세부분으로 구성되어 있다.
* 함수를 호출할 때 넘겨진 인자(배열 형태)
* length 프로퍼티 - 호출할 때 넘겨진 인자의 개수
* callee 프로퍼티 - 현재 실행 중인 함수의 참조값(예제에서는 add() 함수)

arguments 객체는 배열이 아니기 때문에 배열 메서드를 사용하면 에러가 발생한다.
but, 사용하는 방법은 있다.(call, apply)

**arguments 객체를 어떻게 잘 사용할까?**
```javascript
/*4-22-2*/
function sum(){
	var result = 0;
	for(var i = 0; i < arguments.length; i++){
		result +=  arguments[i];
	}
	return result;
}
console.log("1+2+3 = " + sum(1,2,3));
console.log("1+2+3+4+5= " + sum(1,2,3,4,5));
```
```
1+2+3 = 6
1+2+3+4+5= 15
```

### 4.4.2 호출 패턴과 this 바인딩
함수가 호출되는 방식에 따라 this가 다른 객체를 참조한다.(this 바인딩)

#### 4.4.2.1 객체의 메서드 호출할 때 this 바인딩
메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩된다.
```javascript
/*4-23*/
var myObject = {
	name: 'foo',
	sayName: function(){
		console.log(this.name);
	}
};

var otherObject = {
	name: 'bar'
};
otherObject.sayName = myObject.sayName;
myObject.sayName();
otherObject.sayName();
```
```
foo
bar
```
**this는 자신을 호출한 객체에 바인딩된다.**

#### 4.4.2.2 함수를 호출할 때 this 바인딩

함수 내부 코드에서 사용된 this는 전역객체에 바인딩된다.
브라우저의 경우 전역객체는 window 객체이다.
```html
<!DOCTYPE html>
<html><body>
	<script>
    	/*4-24*/
		var foo = "I'm foo";

		console.log(foo);
		console.log(window.foo);
	</script>
</body></html>
```
```html
<!DOCTYPE html>
<html><body>
	<script>
    	/*4-25*/
		var test = 'This is test';
		console.log(window.test);

		var sayFoo = function(){
			console.log(this.test);
		};
		sayFoo();
	</script>
</body></html>
```

++함수 호출에서의 this 바인딩 특성은 내부함수(Inner function)를 호출했을 경우에도 그대로 적용되므로 주의해야한다.++

```html
<html><body>
	<script>
        /*4-26*/
        var value = 100;
        var myObject = {
            value : 1,
            func1 : function(){
                this.value += 1;
                console.log('func1() called. this.value : ' + this.value); //...1

                func2 = function(){
                    this.value += 1;
                    console.log('func2() called. this.value : ' + this.value); //...2

                    func3 = function(){
                        this.value += 1;
                        console.log('func3() called. this.value : ' + this.value); //...3
                    }
                    func3(); // 내부 함수 호출
                }
                func2(); // 내부 함수 호출
            }
        };
        myObject.func1();
</script>
</body></html>
```

1. func1 에서 this는 호출한 자신을 가리키고 value는 1이므로 2가 찍힌다.
2. func2 에서도 this 는 자기자신을 가리킬것이고 value는 2이므로 3이될 것이다.
3. func3 에서도 this 는 자기자신을 가리킬것이고 value는 3이므로 4가될 것이다.
```
func1() called. this.value : 2
func2() called. this.value : 3
func3() called. this.value : 4
```
라고 생각하겠지만 실행결과는
```
func1() called. this.value : 2
func2() called. this.value : 101
func3() called. this.value : 102
```

내부 함수 호출 패턴을 정의해 놓지 않기 때문이다.
2번 3번의 this는 window 객체가 된다.

하지만 방법이 있다
```html
<html><body>
	<script>
        /*4-27*/
        var value = 100;
        var myObject = {
            value : 1,
            func1 : function(){
                var that = this;
                this.value += 1;
                console.log('func1() called. this.value : ' + this.value); //...1

                func2 = function(){
                    that.value += 1;
                    console.log('func2() called. this.value : ' + that.value); //...2

                    func3 = function(){
                        that.value += 1;
                        console.log('func3() called. this.value : ' + that.value); //...3
                    }
                    func3(); // 내부 함수 호출
                }
                func2(); // 내부 함수 호출
            }
        };
        myObject.func1();
</script>
</body></html>
```
++func1 함수 호출시 this값을 다른 변수(that)에 저장한다.++
#### 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
기존함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
함수 이름의 첫 문자를 대문자로 쓰는것이 관습이다.

**생성자 함수가 동작하는 방식**
1. 빈 객체 생성 및 this 바인딩
2. this를 통한 프로퍼티 생성
3. 생성된 객체 리턴

```javascript
/*4-28*/
var Person = function(name){
	this.name = name;
}

var foo = new Person('foo');
console.log(foo.name);

console.log(Person('bar'));
```
```
foo
undefined
```
1. Person() 함수가 생성자로 호출되면. 함수가 실행되기 전에 빈객체로 생성됨
2. 빈 객체는 Person() 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 링크로 연결해서 자신의 프로토타입으로 설정.
3. 생성된 객체는 생성자 함수코드에서 사용되는 this로 바인딩된다.
4. this가 가리키는 빈 객체에 name이라는 동적 프로퍼티 생성.
5. 리턴값이 없으므로 this로 바인딩한 객체가 생성자 함수의 리턴값으로 반환된다.

##### 객체 리터럴 방식과 생성자 함수를 통한 객체 생성방식의 차이
* **프로토타입 객체** 에 차이가 있다.
* 객체 리터럴 방식의 경우 자신의 프로토타입 객체가 Object 이고 생성자 함수 방식의 경우 Person으로 서로 다르다.
* 자바스크립트 객체 생성 규칙 대문에 이런 차이가 발생한다.
* 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.
* 객체 리터럴 방식 - 객체 생성자 함수는 Object()
* 생성자 함수 방식 - 생성자 함수 자체

```javascript
/*4-21*/
var foo = {
	name : 'foo',
	age : 35,
	gender : 'man'
};
console.dir(foo);

function Person(name, age, gender, position){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var bar = new Person('bar', '33,', 'woman');
console.dir(bar);
var baz = new Person('baz', '25', 'woman');
console.dir(baz);
```
*크롬 개발자도구에서 확인*

**프로토타임 체이닝**에서 자세히 다룬다.

##### 생성자 함수를 new를 붙이지 않고 호출할 경우
일반 함수 호출 - this가 window 전역 객체에 바인딩된다.
생성자 함수 호출 = this가 새로 생성되는 빈 객체에 바인딩 된다.

```javascript
/*4-30*/
function Person(name, age, gender, position){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
var qux = Person('qux', 20, 'man');

console.log('qux : ' + qux);
console.log('name : ' + window.name);
console.log('age : ' + window.age);
console.log('gender :' + window.gender);
```
```
qux : undefined
name : qux
age : 20
gender : man
```
1. 일반 함수 Person을 호출
2. 리턴이 없으므로 qux는 undefined로 출력된다.
3. 일반함수 이기때문에 window객체에 바인딩된다.

*강제로 인스턴스 생성해보고 이해하기 - 과제(p.114참고)*

#### 4.4.2.4 call과 apply 메서드를 이용한 명시적인 this 바인딩
this를 특정 객체에 명시적으로 바인딩 시키는 방법? **apply(), call() 메서드**

```javascript
function.apply(thisArg, argArray)
```
첫번째 인자는 this에 바인딩할 객체.
두번째 인자는 함수를 호출할때 넘길 인자들의 배열.
```javascript
/*4-31*/
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
//빈 객체 생성
var foo = {};
var bar = {};

Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);
Person.call(bar, 'foo', 30, 'man');
console.dir(bar);
```
this를 foo 객체에 명시적으로 바인딩한다.

`call() 메서드는 apply()와 기능은 같지만, 배열이아닌 각각 하나의 인자로 넘긴다는 차이점이 있다.`

*예제4-32 보류합니다. 좀더 개념을 잡고 보도록할게요.*

### 4.3.3 함수 리턴
**자바스크립트 함수는 항상 리턴값을 반환한다**
return 문을 사용하지 않았더라도 항상 리턴값을 반환함.

#### 4.4.3.1 일반함수나 메서드는 리턴값을 지정하지 않을 경우, undefined값이 리턴된다.

```javascript
/*4-34*/
var noReturnFunc = function(){
	console.log('리턴값이 없습니다.');
}
var result = noReturnFunc();
console.log(result);
```
```
리턴값이 없습니다.
undefined
```

#### 4.3.3.2 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다
*예제 4-28 참고.*

this로 바인딩되서 생성된 객체가 아닌 다른 객체를 리턴하면?
```javascript
/*4-35*/
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	//명시적으로 다른 객체 반환
	return {name:'bar', age:20, gender:'woman'};
}

var foo = new Person('foo', 30, 'man');
console.dir(foo);
```

##### 기본타입값을 리턴했을 경우
```javascript
/*4-36*/
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	//명시적으로 다른 객체 반환
	return {name:'bar', age:20, gender:'woman'};
}

var foo = new Person('foo', 30, 'man');
console.dir(foo);
```

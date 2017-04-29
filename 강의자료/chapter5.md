[TOC]

------

## 5.1 실행 컨텍스트 개념 ##

- 함수가 실행될 경우 생성되는 변수 등의 정보를 저장하는 객체라고 볼 수 있다

```javaScript
console.log("This is global context");

function ExContext1() {
	console.log("This is ExContext1");
};

function ExContext2() {
	ExContext1();
	console.log("This is ExContext2");
};

ExContext2();
```



## 5.2 실행 컨텍스트 생성 과정 ##

```javascript
function execute(param1, param2) {
	var a = 1, b = 2;
	function func() {
		return a+b;
	}
	return param1+param2+func();
}

execute(3, 4);
```

### 5.2.1 활성 객체 생성 ###

- 활설 객체란 실행에 필요한 여러 가지 정보를 담을 객체

  ​

### 5.2.2 arguments 객체 생성 ###

- 활성 객체에 auguments 프로퍼티로 생성한다

  ​

### 5.2.3 스코프 정보 생성 ###

- 컨텍스트에서 특정 변수에 접근해야 할 경우 스코프 정보를 조회한다

- 리스트 형태로 스코프 체인이라 하며, scope 프로퍼티로 참조된다.

  ​

### 5.2.4 변수 생성 ###

- 내부에서 사용되는 지역 변수의 생성

- 활성객체의 프로퍼티로 선언되고, 변수객체와 동일한 의미이다

- 해당 프로퍼티에 대해 값이 넘겨지지 않았다면 undifined가 할당된다 (4장 참조)

- 변수를 생성하지만 초기화는 이루어지지 않고, 실행시점에 초기화가 이루어진다

  ​

### 5.2.5 this 바인딩 ###

- 4장참조

### 5.2.6 코드 실행 ###

- 변수의 초기화 및 연산, 또 다른 함수 실행 등이 이루어짐

- undifined가 할당된 지역변수 등도 이 과정에서 초기화 진행이 이루어짐

  ​

## 5.3 스코프 체인 ##
- 스코프 : 각 함수의 객체 내에서 연결리스트로 관리하고, 변수의 유효범위를 나타낸다

### 5.3.1 전역 실행 컨텍스트의 스코프 체인###

```javascript
var var1 = 1;
var var2 = 2;
console.log(var1);  // 1
console.log(var2);  // 2
```

- 전역 실행 컨텍스트 생성 -> 변수객체 생성

- 변수객체의 scope는 변수객체 자신을 가리킴 (전역변수)

  ​

### 5.3.2 함수를 호출하는 경우 생성되는 실행 컨텍스트의 스코프 체인###

```javascript
var var1 = 1;
var var2 = 2;
function func() {
    var var1 = 10;
    var var2 = 20;
    console.log(var1); // 10
    console.log(var2); // 20
}
func();
console.log(var1);  // 1
console.log(var2);  // 2
```

- 전역 객체 생성 -> 함수객체 생성
- 생성된 함수객체의 scope는 전역객체의 scope를 참조한다
- func 컨텍스트의 스코프
  - 1 : func 변수 객체
  - 0 : 전역 객체
- 스코프 체인 = 현재 실행 컨텍스트의 변수객체 + 상위 컨텍스트의 스코프 체인



```javascript
var value = "value1";

function printFunc(func) {
    var value = "value2";
	
	function printValue() {
		return value;
	}
	
    console.log(printValue());
}

printFunc();
```

- printValue() 에서 value 지역 변수가 없으므로, 상위 컨텍스트인 printFunc 에서 value 를 찾아 결과를 return한다

  ​

```javascript
var value = "value1";

function printValue() {
    return value;
}
function printFunc(func) {
    var value = "value2";
    console.log(func());
}

printFunc(printValue);
```

- 각 함수의 객체가 처음 생성될 당시(함수를 실행하는 시점) 실행 컨텍스트가 무었인지가 중요하다
- printValue() 실행시점에서 상위 컨텍스트 pringFunc()의 scope 를 우선 가져오고, 자신의 상위 컨텍스트인 전역변수를 가져오기 때문에 위와같은 결과가 출력된다.



- ### with()

  ```javascript
  var y = {x:5};

  function withExamFunc(){
    var x = 10;
    var z;
    
    with(y){
      z = function(){
        console.log(x); //5
      }
    }
    z();
  }
  withExamFunc();
  ```

  - with 구문은 표현식을 실행하는데, 표현식이 객체일 경우 객체변수는 실행 컨텍스트 스코프체인의 전에 있던곳에 저장한다.

  - 위의 경우에는 with 구문 실행시점에서 withExamFunc() 의 컨텍스트에 x 변수에 5가 추가된다.

    ​

  ### eval()

  - 문자열로 이루어진 문장을 스크립트 언어로 실행하는 함수

  - 보안에 문제가 있을 수 있기 때문에 통상적으로 사용하지 않는것을 권유함

    ​

- ### 호이스팅

  ```javascript
  foo();
  bar();

  var foo = function(){
    console.log("foo and x = " + x);
  };

  function bar(){
    console.log("bar and x = " + x);
  };

  var x = 1;
  ```

- 전역 컨텍스트 생성시 전역변수 foo 는 undifined 로 생성되기 때문에 실행오류가 된다

  ​

## 5.4 클로저 ##

### 5.4.1 클로저의 개념###

```javascript
function outerFunc(){
	var x = 10;
	var innerFunc = function() { console.log(x); }
	return innerFunc;
}
 
var inner = outerFunc();
inner();
```

- 이미 생명주기가 끝난 외부 함수의 변수를 잠조하는 함수를 클로저라고 한다

- outerFunc 실행 이후 return받은 innerFunc 에서 실행이 끝난 outerFunc의 변수에 접근이 가능함

  ​

```javascript
function outerFunc(arg1, arg2){
    var local = 8;
    function innerFunc(innerArg){
        console.log((arg1 + arg2)/(innerArg + local));
    }
	
    return innerFunc;
}
 
var exam1 = outerFunc(2, 4);
exam1(2);
```

- outerFunc 실행 이후에도 지역변수가 가비지 컬렉션의 대상이 되지 않기 때문에 성능의 저하를 불러올 수 있다

  ​

### 5.4.2 클로저의 활용###

##### 5.4.2.1 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

```javascript
function HelloFunc(func) {
	this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
	func ? func(this.greeting) : this.func(this.greeting);
}	

var userFunc = function(greeting) {
	console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();
```

- userFunc 를 실행하면서 HelloFunc 에 선언되어있는 greeting 을 출력

```javascript
function HelloFunc(func) {
	this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
	func ? func(this.greeting) : this.func(this.greeting);
}	

var userFunc = function(greeting) {
	console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

function saySomething(obj, methodName, name) {
	return (function(greeting) {
		return obj[methodName](greeting, name);
	});
}

function newObj(obj, name) {
	obj.func = saySomething(this, "who", (name || "everyone"));

	return obj;
}

newObj.prototype.who = function(greeting, name) {
	console.log(greeting + " "  +  (name || "everyone") );
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();
```

- newObj 함수에서 함수명을 인자로 받아 실행한다

- newObj 의 함수인 who 를 HelloFunc에 연결하여 사용한다

- 위와같은 방식으로 이벤트핸들러에 사용자가 원하는 기능을 연결하여 사용이 가능하다

  ​

##### 5.4.2.2 함수의 캡슐화

- I am XXX. I live in XXX. I'am XX years old. 라는 문장을 출력하는데, XX 부분은 사용자에게 인자로 입력을 받아 값을 출력하는 함수

```javascript
var buffAr = [
	'I am ',
	'',
	'. I live in ',
	'',
	'. I\'am ',
	'',
	' years old.',
];

function getCompletedStr(name, city, age) {
	buffAr[1] = name;
	buffAr[3] = city;
	buffAr[5] = age;

	return buffAr.join('');
}

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);
```

- buffAr 이 전역변수로 선언되어 있어 외부에 노출되기 때문에 문제가 발생할 수 있음



```javascript
var getCompletedStr = (function(){
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.',
    ];

    return (function(name, city, age) {
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;

        return buffAr.join('');
    });
})();

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);
```

- getConpletedStr 의 return 익명함수에서 buffAr 을 참조하여 값을 반환함
- return 익명함수를 실행하는 시점은 console.log(str) 부분 이지만 스코프 체인으로 인해 buffAr 을 참조하는 것으로 사용할 수 있다

##### 5.4.2.3 setTimeout()에 지정되는 함수의 사용자 정의

- setTimeout의 경우 함수와 시간을 인자로 받아 일정 시간이후 함수를 실행하는 함수이다

```javascript
function callLater(obj, a, b) {
    return (function(){
        obj["sum"] = a + b;
		console.log(obj["sum"]);
    });
}

var sumObj = {
	sum : 0
}
 
var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);
```

- setTimeout 을 사용하면서 인자를 넘겨주고 싶다면, 위와같은 방식으로 사용하여 sumObj 에 접근 및 변수 설정이 가능하다

  ​

### 5.4.3 클로저를 활용할 때 주의사항###

5.4.3.1 클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의해야 한다

```javascript
function outerFunc(argNum) {
  var num = argNum;
  return function(x) {
      num += x;
      console.log('num: ' + num );
    }
}
 
 var exam = outerFunc(40);
 
 exam(5);
 exam(-10);
```

- exam() 실행시 마다 변수 num 의 값이 변하는것을 볼 수 있음

  ​

5.4.3.2 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다

```javascript
function func(){
   var x = 1;
   return {
      func1 : function(){ console.log(++x); },
      func2 : function(){ console.log(-x); }
   };
};

var exam = func();
exam.func1();
exam.func2();
```

- 특이한 경우이지만 func() 의 반환으로 func1, func2 를 가지는 object 를 반환하고, 이를 각각 실행이 가능한데, 각각의 함수에 참조되어 있는 변수 x는 서로 체이닝 되어 있음을 주의하여야 한다.

  ​

5.4.3.3 루프 안에서 클로저를 활용할 때는 주의하자


```javascript
function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};
countSeconds(3);
```
- 각각의 선언된 setTimeout 에서 참조하는 변수 i 는 체이닝 되어 있기 때문에 같은 값을 출력하게 된다

  ​

```javascript
function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function (currentI) {
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    }(i));
  }
};
countSeconds(3);
```

- 위와 같이 변수를 저장하여 처리하는 것으로 변경하면 해결할 수 있다.
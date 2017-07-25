
# Chapter 07. 함수형 프로그래밍
프로그래밍의 여러 가지 패러다임 중 하나이다. [위키백과](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84)
자바스크립트로 일부 구현 가능하지만 순수한 함수형 프로그래밍 언어는 아니다.


## 7.1 함수형 프로그래밍의 개념
함수의 조합으로 작업을 수행하는 의미이다. 이 작업이 이루어지는 동안 작업에 필요한 데이터와 상태는 변하지않는다. 변할수 있는 건 오로지 함수 뿐이다. 이 함수가 바로 연산의 대상이 된다.

**슈도코드**
```
f1 = encrypt1;
f2 = encrypt2;
f3 = encrypt3;
```
f1,f2,f3의 입력값이 정해져있지 않고, 서로다른 암호화 알고리즘만 있다.

```
pure_value = 'zzoon';
encrypted_value = get_encryted(x);
```
pure_value는 암호화 할 문자열, encrypted_value는 암호화된 문자열,
get_encryted() -> 암호화 함수를 받아서 입력받은 함수로 pure_value를 암호화한 후 반환한다.

```
encrypted_value = get_encryted(f1);
encrypted_value = get_encryted(f2);
encrypted_value = get_encryted(f3);
```

* 여기서 f1,f2,f3 는 외부에 아무런 영향을 미치지않는함수 : **순수함수**
* get_encryted()는 반환값을 또다시 함수로 사용할 수 있다 : **고계함수**

## 7.2 자바스크립트에서의 함수형 프로그래밍

자바스크립트에서도 함수형 프로그래밍이 가능하다. **일급객체**, **클로저**를 지원하기 때문.

```javascript
/*7.1*/
var f1 = function(input){
	var result;
	/* 암호화 작업 수행 */
	result = 1;
	return result;
}
var f2 = function(input){
	var result;
	/* 암호화 작업 수행 */
	result = 2;
	return result;
}
var f3 = function(input){
	var result;
	/* 암호화 작업 수행 */
	result = 3;
	return result;
}

var get_encrypted = function(func){
	var str = 'zzoon';

	return function(){
		return func.call(null, str);
	}
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);
```

함수를 인자로 넘기고 함수를 반환할 수 있다.
str변수가 외부에서 영향을 받지않게 하기위해 클로저를 사용하였음.

### 7.2.1 배열의 각 원소 총합 구하기
```javascript
/*7.2.1*/
function sum(arr){
	var len = arr.length;
	var i =0, sum = 0;

	for(; i< len; i++){
		sum+= arr[i];
	}
	return sum;
}

var arr = [1,2,3,4];
console.log(sum(arr));
```

**배열의 각 원소 곱 구하기**
```javascript
function multiply(arr){
	var len = arr.length;
	var i =0, result = 1;

	for(; i< len; i++){
		result *= arr[i];
	}
	return result;
}

var arr = [1,2,3,4];
console.log(multiply(arr));
```
두 예제 모두 명령형 프로그래밍 방식으로 작성된 코드이다. 각각의 문제를 각각의 함수를 구현해서 계산한다.
다른 방식으로 산술하려면(빼기나 나누기 등등) 새로운 함수를 구현해야 하지만, 함수형 프로그래밍을 이용하면 수고를 덜 수 있다.

```javascript
/* 7.2.3 */
function reduce(func, arr, memo){
	var len = arr.length,
		i = 0,
		accum = memo;
	for(; i < len; i++){
		accum = func(accum, arr[i]);
	}
	return accum;
}

/*7.2.4*/
var arr = [1,2,3,4];

var sum = function(x,y){
	return x+y;
};

var multiply = function(x,y){
	return x*y;
}
console.log(reduce(sum,arr,0));
console.log(reduce(multiply,arr,1));
```
### 7.2.2 팩토리얼
```javascript
/*7.3.1*/
function fact(num){
	var val = 1;
	for(var i = 2; i <= num; i++){
		val = val*i;
	}
	return val;
}

console.log(fact(100));
```
```javascript
function fact(num){
	if(num ==0) return 1;
	else return num*fact(num-1);
}
console.log(fact(100));
```
이정도로 구현할 수 있다. 함수형프로그래밍으로 구현해보자
```javascript
/*7.3.3*/
var fact = function(){
	var cache = {'0' : 1};
	var func = function(n){
		var result = 0;

		if(typeof(cache[n]) === 'number'){
			console.log('factorial : '+n+', cache : ' + cache[n]);
			result = cache[n];
		}else{
			result = cache[n] = n * func(n-1);
		}
		return result;
	}
	return func;
}();

console.log(fact(3));
console.log(fact(5));
console.log(fact(7));
```
한번 계산된 값은 캐시에 저장후 다시 써먹는다.  **메모이제이션 기법**
10!을 계산하고 20!을 계산하면 한번 연산했던 로직을 되풀이하지않고 10!의 결과값을 가지고 20!을 구한다. 어렵다.

### 7.2.3 피보나치 수열
```javascript
/*7.4*/
var fibo = function(){
	var cache = {'0' : 0, '1' : 1};

	var func = function(n){
		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = func(n-1) + func(n-2);
		}
		return result;
	}
	return func;
}();

console.log(fibo(10));
```

팩토리얼과 피보나치수열을 계산하는 함수를 함수형프로그래밍으로 만들기

```javascript
/*7.5*/
var cacher = function(cache, func){
	var calculate = function(n){
		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = func(calculate,n);
		}
		return result;
	}
	return calculate;
};

/*7.6*/
var fact = cacher({'0' : 1}, function(func, n){
	return n * func(n-1);
});

var fibo = cacher({'0' : 0, '1' : 1 }, function(func, n){
	return func(n-1) + func(n-2);
});

console.log(fact(10));
console.log(fibo(10));
```

### 7.3.2 커링
특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, 나머지를 인자로 받는 새로운 함수를 만드는 것
```javascript
/*7.7*/
function calculate(a,b,c){
	return a*b+c;
}
function curry(func){
	var args = Array.prototype.slice.call(arguments,1);
	console.log("args : " + args);
	return function(){
		console.log("argsFunc : " + args.concat(Array.prototype.slice.call(arguments)));
		return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	}
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2,3)); // 1 x 2 + 3 = 5

var new_func2 = curry(calculate, 1,3);
console.log(new_func2(3)); // 1 x 3 + 3 = 6
```
### 7.3.3 bind
생략

### 7.3.4 래퍼
특정 함수를 자신의 함수로 덮어쓰는 것을 말한다. 원래 기능을 잃어버리지 않은 상태로 자신의 로직을 수행할 수 있어야 한다. 오버라이드와 비슷하다
```javascript
/*7.10*/
function wrap(object, method, wrapper){
	var fn = object[method];
	return object[method] = function(){
		return wrapper.apply(this, [ fn ].concat(Array.prototype.slice.call(arguments)));
	};
}

Function.prototype.original = function(value){
	this.value = value;
	console.log("value : " + this.value);
}

var mywrap = wrap(Function.prototype, "original", function(orig_func, value){
	this.value = 20;
	orig_func(value);
	console.log("wrapper value : " + this.value);
});

var obj = new mywrap("zzoon");
```
#### 7.3.5.1 each
배열의 각 요소 혹은 객체의 각 프로퍼티를 하나씩 꺼내서 차례대로 특정 함수에 인자로 넣어 실행시키는 역할을 한다. 자주사용됨.
대부분의 자바스크립트 라이브러리에 기본적으로 구현되어있다. 

**jquery 1.0 의 each함수**
```javascript
/*7.11*/
function each(obj, fn, args){
	if(obj.length == undefined){
		for(var i in obj){
			fn.apply(obj[i], args || [i, obj[i]]);
		}
	}else{
		for(var i = 0; i < obj.length; i++){
			fn.apply(obj[i], args || [i, obj[i]]);
		}
	}
	return obj;
}

each([1,2,3], function(idx, num){
	console.log(idx + ": " + num);
});

var zzoon = {
	name : "zzoon",
	age : 30,
	sex : "Male"
};

each(zzoon, function(idx, value){
	console.log(idx + ": " + value);
});
```
#### 7.3.5.2 map

주로 배열에 많이 사용되는 함수이다. 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시켜새로운 값을 얻은 후에 새로운 배열에 넣는다.

```javascript
/*7.12*/
Array.prototype.map = function(callback){
	var obj = this;
	var value, mapped_value;
	var A = new Array(obj.length);

	for(var i = 0; i < obj.length; i++){
		value = obj[i];
		mapped_value = callback.call(null, value);
		A[i] = mapped_value;
	}
	return A;
};

var arr = [1,2,3];
var new_arr = arr.map(function(value){
	return value * value;
});

console.log(new_arr);
```

#### 7.3.5.3 reduce
배열의 각 요소를 하나씩 꺼내서 사용자의 함수를 적용시킨 뒤, 그 값을 계속해서 누적시키는 함수.
```javascript
Array.prototype.reduce = function(callback, memo){
	var obj = this;
	var value, accumulated_value = 0;

	for(var i = 0; i < obj.length; i++){
		value = obj[i];
		accumulated_value = callback.call(null, accumulated_value, value);
	}
	return accumulated_value;
};

var arr = [1,2,3];
var accumulated_val = arr.reduce(function(a,b){
	return a + b*b;
});

console.log(accumulated_val);
```

### 기타

```javascript
var yangpa5 = "Marry me";

function print_value() {
	console.log(yangpa5);

	var yangpa5 = "나 때문에";
	console.log(yangpa5);

	function nested() {
		console.log(yangpa5);

		yangpa5 = "사랑...그게뭔데";
		console.log(yangpa5);

		var yangpa5 = "한 사람";
		console.log(yangpa5);
	}
	nested();
}
print_value();
```

```javascript
{
	var foo = 1;
	console.log(foo);
}
console.log(foo);
```
블럭안에 있는 foo 변수를 블럭 밖에서 사용하지 못할 것으로 예상되지만 Javascript에서 위의 블럭은 아무런 의미가 없다.

```javascript
function bar() { 
	var foo = 2; 
	console.log(foo);
}

bar(); 
console.log(foo);
```

```javascript
var foo = 1; 
console.log(foo); 

{ 
	var foo = 2; 
	console.log(foo) 
} 

console.log(foo);
```

```javascript
function bar() {
	foo = 2; 
	console.log(foo);
} 

bar(); 
console.log(foo);
```
```javascript
var foo = 1;
console.log(foo); 
function bar() {
	foo = 2; 
	var foo; 
	console.log(foo); 
} 
bar(); 
console.log(foo);
```
```javascript
var foo = function() {
	console.log("once");
	foo = function() {
		console.log("body");
	}
	foo();
}

foo();
```
```javascript
var add = (function() {
	var x = 0
	return function() {
		return ++x;
	}
})()
```
```javascript
(function(){
  return typeof arguments;
})();
```
```javascript
var f = function g(){ return 23; };
typeof g();
```

```javascript
var y = 1, x = y = typeof x;
x;
```

```javascript
(function(x){
  delete x;
  return x;
})(1);
```

```javascript
(function f(f){ 
  return typeof f(); 
})(function(){ return 1; });
```

```javascript
var foo = { 
  bar: function() { return this.baz; }, 
  baz: 1
};
(function(){ 
  return typeof arguments[0]();
})(foo.bar);
```

```javascript
var foo = {
  bar: function(){ return this.baz; },
  baz: 1
}
typeof (f = foo.bar)();
```

```javascript
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;
```

```javascript
var x = 1;
if (function f(){}) {
  x += typeof f;
}
x;

```

```javascript
var x = [typeof x, typeof y][1];
typeof typeof x;
```

```javascript
(function(foo){
  return typeof foo.bar;
})({ foo: { bar: 1 } });
```

```javascript
(function f(){
  function f(){ return 1; }
  return f();
  function f(){ return 2; }
})();
```

```javascript
function f(){ return f; }
new f() instanceof f;

```

```javascript
with (function(x, undefined){}) length;
```

## 1. 기본적으로 함수는 global 객체이다.
 - 직접함수를 호출하는 경우: this는 global객체가 됨
 - new로 생성하지 않으면 직접함수 호출과 같다 -> global객체가 됨

## 2.global 객체가 아닌 2가지경우(ECMAScript의 규약을 따를것)
 - function 영역에서의 this는 부모 객체이다. 단, 그 부모의 자식으로서 불렸을 때에만 즉, 객체의 프로퍼티일때
 - new 연산자로 생성된 function 영역의 this는 새로 생성된 객체 그 자신이다.

## 3. call과 apply 메서드를 이용한 명시적인 this 바인딩
 - call과 apply는 모든함수의 부모 객체인 Function.prototype 객체의 메서드 이다
 - 사용방식은 FunctionName.apply(thisarg, argArray)
 - thisarg: this로 명시적으로 바인딩 되는것
 - argArray: 함수에 넘길 인자를 배열형태로 넘긴다
 - call과 apply의 차이: call의 두번째 인자는 apply에서 배열형태로 넘긴 것을 각각 하나의 인자로 넘긴다

## 4. arguments 객체
 - length 프로퍼티만을 가진 유사 객체배열이다(pop, push, shift 등) 표준 배열 메서드 사용 불가

## 5. function return 규칙
 - 일반 함수나 메서드는 리턴값을 지정하지 않을경우, undefined를 반환한다
 - 생성자 함수에서 리턴값을 지정하지 않을경우, 생성된 객체가 반환된다.
 - 기존리턴값을 객체로 한다면 생성자 함수를 사용하여 객체를 만들더라도 기존 리턴값이 반환된다
 - 기존 리턴값이 기본타입의 변수라면 새롭게 생성된 생성자 함수의 인자들이 리턴된다

## 6. 프로토타입 체이닝
 - 해당 객체에 접근하려는 프로퍼티나 메서드가 없을때 prototype링크를 따라 자신의 부모역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는것
 - c++이나 자바같은 객체지향 프로그래밍에서 객체를 생성한다는건 class를 정의하는것, 자바스크립트에서 객체를 생성한다는것은 객체리터럴이나, 생성자함수를 통해 하는것
 - 생성자함수는 prototype 프로퍼티를 갖는데 이것은 prototype객체를 가르킨다 생성자함수를 통해 생성된 새로운 객체는 prototype객체가 가르키는 prototype객체를 자신의 부모객체로 설정한다 이렇게 연결된것을 prototype링크 라고 한다.
 - Object.prototype 객체는 자바스크립트 모든 객체의 조상역할을 한다(프로토타입 체이닝의 종점)

## 7. 함수 호출 패턴과 this 바인딩
  ### 1) 메서드 호출 패턴(Method Invocation Pattern) ###
```
var obj1 = {
  name: 'kim',
  sayName: function(){
    console.log(this.name);
  }
}

var obj2 = {
  name: 'sangjin'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();
```


  
 ### 2) 함수 호출 패턴(Function Invocation Pattern) ###
  	- Browser-side: window
  	- Server-side: global

```
var value = 1;
var obj = {
  value: 100,
  foo: function(){
    var that = this;
    console.log(this);    //this == obj
    console.log(this.value);

    function bar(){
      console.log(this);    //global
      console.log(this.value);
    }
    bar();
  }
}
obj.foo();
//일반함수 호출에서의 this는 전역객체에 바인딩된다.
```

```
var value = 1;
var obj = {
  value:100,
  foo: function(){
    var that = this;

    console.log(this);   //obj
    console.log(this.value);    //100

    function bar(){
      console.log(that);    //obj
      console.log(that.value);  //100

      function bar2(){
        console.log(that)   //obj
        console.log(that.value);  //100
      }
      bar2();
    }
    bar();
  }
}
obj.foo();
```





 ### 3) 생성자 호출 패턴(Constructor Invocation Pattern) ###
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


#### Scope-Safe Constructor ####


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



 ### 4) apply 호출 패턴(Apply Invocation Pattern) ###

```
var Person = function(name, gender){
  this.name = name;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ['name', 'male']);    // == Person.call(foo, 'name', 'male');
console.log(foo);

```


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
    callback.call(this);
  }
};

function foo(){
  console.log(this.name);
  console.log(this);
}

var p = new Person('pp');
p.doSomething(foo);
```


```
function Person(name, gender){
  this.name = name;
  this.gender = gender;
}

Person.prototype.doSomething = function(callback){
  if(typeof callback == 'function'){
    callback.call(this);   //일반함수 호출
  }
};

function foo2(){
  console.log(this.name);
  console.log(this.gender);
}

var p = new Person('ppp', 'male');
p.doSomething(foo2);
```




























## Chapter4_2

##### 4.4.2.1 객체의 매서드 호출할 때 this 바인딩(메서드 호출패턴)

- 해당 메서드를 호출한 객체로 바인딩 한다

```javascript

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

##### 4.4.2.2 함수를 호출할 때 this 바인딩(함수호출 패턴)
- 비교 1

```javascript
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

- 비교 2

```javascript
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

##### 4.4.2.3 생성자 함수를 호출할 때 this 바인딩(생성자 함수 호출 패턴)
- Scope-Safe Constructor
- [link](http://poiemaweb.com/js-this)

```javascript
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

##### 4.4.2.4 call과 apply 메서드를 이용한 명시적인 this바인딩(apply,call 호출패턴)
- apply(thisArg, argArray)
- call(thisArg, arg)

```javascript
var Person = function(name, gender){
  this.name = name;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ['name', 'male']);    // == Person.call(foo, 'name', 'male');
console.log(foo);
```

- 객체 Prototype

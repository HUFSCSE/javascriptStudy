### 과제

# 2주차

### call by value와 call by reference의 차이점
함수를 호출하여 파라미터로 값, 객체를 넘겨줄 때 call by value, call by reference
가 발생한다. call by value 는 값만 넘겨주어서 파라미터가 똑같은 값을 가지게 해주고
함수 내에서 값을 바꾸어도 기존의 값은 바뀌지 않는다, reference 는 데이터가 저장되어 있는
공간에 대한 참조값을 가지게 해서 함수 내에서 값을 바꾸면 기존의 값도 바뀌게 된다
 
- number, string, boolean 기본 타입들은 call by value
- object , array, function 와 같이 객체는 call by reference

```javascript
var num = 41;
var arr = [1,2,3,4];

console.log(num); //41
console.log(arr); //[1,2,3,4]

function func(a,b){
    a = 14;
    b.push(5);
   console.log(a);//14
   console.log(b);//[1,2,3,4,5]
}
func(num,arr);
console.log(num); //41
console.log(arr); //[1,2,3,4,5]
```

```javascript
function fn(){
}
 
fn.prototype = {'arr': []};
 
new fn().arr.push(1);
 
console.log(new fn().arr); // 1
```

### 메서드(Method)란 무엇인지?
메소드는 객체가 가지고 있는 동작이다. 
메소드를 수행하기 위해서는 객체를 통해서 해당 메소드를 수행하여야 한다. 
즉 그 동작을 수행하는 주체는 객체이며 그 동작을 수행하기 위해서는 
객체에게 그 동작을 수행하라고 지시해야 한다. 

함수는 그 동작을 수행하기 위해 객체에게 어떤을 동작을 수행하라고 명령하지 않아도 된다.
그 이유는 함수자체가 그 동작을 정의한 함수객체이기 때문에 자기 자신을 수행하는 것이다. 

### 배열 객체를 통해 사용할 수 있는 메서드가 어떤것이 있는지?

##### push(value, value, ...)
- 배열의 끝에 값들을 추가하고, 새로운 length 를 반환한다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
```

##### pop()
- 배열의 끝에 있는 값을 지우고, 지워지는 값을 반환한다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());
```
##### unshift(value, value, ...)
- 배열의 앞에 값들을 추가하고, 새로운 length 를 반환한다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
```

##### shift()
- 첫번째에 있는 값을 지우고, 지워지는 값을 반환합니다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
```

##### valueOf()
- 같은 값을 가지는 Array 를 반환해 줍니다
- w3schools 에서는 Note: This method will not change the original array
- 하지만 직접 해보니 바뀐다!!!?
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();
console.log(fruits,v);
fruits.pop();
console.log(fruits,v);
v.pop();
console.log(fruits,v);
```

##### toString()
- array 를 string 으로 반환해 준다
- item 들을 comma 로 나누어 준다
- join(separator) 를 통해 comma 가 아닌 다른 걸로 나눌 수 있다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(Array.isArray(fruits.toString()));
```
##### Array.isArray()
- 파라미터가 Array 인지 아닌지 확인하는 메소드이다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));
```

##### fill(value)
- value 값으로 array 안에 값을 채울수 있다
- start 부터 시작하여
- end 전 까지 !!! fill 합니다
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 0, 3);
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 0, 4);
console.log(fruits);
```
##### array1.concat(array2, array3, ...)
- array1 의 끝에 array2 를 붙이고, 붙이는 함수이다
- return 값으로 모두 붙여진 array 가 반환된다

##### splice(index, howmany, item1, item2, ...)
- delete array[index] 는 값을 지울 뿐, 그 공간은 undefined 로 남는다
- splice 를 통해서 해결할 수 있다
- 해당 index 에서 부터 시작하여 howmany 만큼 제거하고 items 을 채워넣어준다

##### sort(copare function)
- 알파벳 순으로 증가하는 정렬해 준다
- 감소하는 알파벳 순은 sort() 후 reverse() 함수 호출
- 숫자 sort 주의 : 20 이 100 보다 크다고 나온다 ( 2 가 1 보다 크므로)
- sort(function(a, b){return a-b}); // 숫자 오름차순
- sort(function(a, b){return b-a}); // 숫자 내림차순

#### [참조](https://www.w3schools.com/jsref/jsref_obj_array.asp)

### 조건문, 반복문 정리

##### if
```javascript
if (condition1) {
    console.log("if");
} else if (condition2) {
    console.log("else if");
} else {
    console.log("else");
}
```

##### switch
```javascript
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
```

##### for(){} while(){}  do{}while();
- C 언어와 같다

##### for/of
- This is a new technology, part of the ECMAScript 2015 (ES6) standard.
- 반복 가능한 객체(배열, Map, Set, 인수 객체 등을 포함)를 통해 반복하는 루프를 만듭니다.
- 각각의 고유한 특성의 값을 가진다
```javascript
var arr = [3, 5, 7];
arr.foo = "hello";

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs "3", "5", "7"
}
```
##### for/in
- 객체의 프로퍼티를 탐색해 준다
```javascript
var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text += person[x];
}
console.log(text);
```



  


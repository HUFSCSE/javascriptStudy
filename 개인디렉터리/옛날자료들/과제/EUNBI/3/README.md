
# 3주차과제

## call by value와 call by reference의 차이점

### call by value : 값에 의한 호출, 
		장점: 인자로 넘기는 데이터(값)를  복사해서 새로운 함수로 전달하기 때문에 원본 데이터가 바뀌지 않는다.
		단점: 인자를 넘겨줄 때마다 메모리의 공간을 할당하기 때문에 메모리 공간 낭비, 복사 손실 등의 문제점이 있다.
### call by reference  : 참조에 의한 호출,
		장점: 데이터가 아닌 주소 값을 인자로 전달하기 때문에 복사손실과 메모리 할당의 문제에서 벗어났다.
		단점: 원본의 데이터(값)를 훼손할 수 있다는 문제점이 있다.

    var num = 10;
    var obj = {value:10};

    function func(a,b){
      a = 20;
      b.value = 20;

       console.log(a); //20
       console.log(b); //20
    }
    fuc(num,obj);
    console.log(num); //10
    console.log(obj); //value:20


## 메서드(Method)란 무엇인지?
- 어떤 객체의 속성으로 저장된 자바스크립트 함수

## 배열에 사용할 수 있는 메서드가 어떤것이 있는지?

### join() : 배열의 모든 원소를 문자열로 변환하고 이어붙여 반환한다.
	var a = [1,2,3];
	var s = a.join();
	s=a.join(",,"); // 1,,2,,3
	s=a.join(",,");	// 123

### reverse() :배열 안의 원소 순서를 반대로 정렬하여 반환한다.
	var arr = newArray(1,2,3);
	var rev = arr.reverse(); //[3,2,1]
	 
### sort() : 배열 안의 원소들을 정렬하여 반환한다.
	var arr = new Array("1","f","d" ,"3" , "-1");
	var sor = arr.sort();//["-1", "1", "3", "d", "f"]
	
### concat() : 배열의 모든 원소를 이어붙여 새로운 배열을 생성하여 반환한다.
	var arr = [1,2,3];
	var con = arr.concat([4,5]);//1,2,3,4,5
	var con = arr.concat(4,5); //1,2,3,4,5
	var con = arr.concat([4,5],[6,[7]]); //[1, 2, 3, 4, 5, 6, Array[1]]
	
### slice() : 배열의 일부분 반환한다.
	var arr = ["a","b", "c","d"];
	var sli = arr.slice(0,3); //["a", "b", "c"]
	sli = arr.slice(3); // ["d"]
	
### splice() : 배열에 원소를 삽입하거나 원소를 제거하려 할 때 범용적으로 사용할 수 있는 메서드이다.
	var a = [1,2,3,4,5,6,7];
	var b = a.splice(5); // a = > [1, 2, 3, 4, 5]  b = > [6, 7]
	
	var a = [1,2,3,4,5,6,7]; 
	b =  a.splice(4,2); // a = > [1, 2, 3, 4, 7] b = >[5, 6]
	
	var a = [1,2,3,4,5,6,7];
	b = a.splice (2,1,7);// a = > [1, 2, 7, 4, 5, 6, 7] b = >[3]
	

### push() : 배열의 끝부분에 하나 혹은 여러 원소를 이어붙이고 새로운 길이를 반환한다.
### pop() : 마지막 원소를 제거하고 배열의 길이를 감소시킨 후 제거한 원소를 반환한다.
	
	var stack = [];
	stack.push(1,2); // [1,2]
	stack.pop(); //2
	stack.push(3); //[1,3]
	

### unshift() : 배열의 맨 앞 원소를 삽입한다.
### shift() : 배열의 맨 앞 원소를 제거한다.
	
  var a =[];
	a.unshift(1); // [1]
	a.unshift(2); // [2.1]
	a.shift();  // [1]

### length() : 배열의 길이 반환
 
### delete() : 배열의 요소 삭제

### valueof(),tostring() : 문자열로 변환해서 반환하는 함수, 
기능은 비슷하지만 valueOf는 파라미터가 null일경우 문자열 null을 만들어서 담는다.
toString은 대상값이 null이면 NullPointerException이 발생한다. 

## 조건문,  반복문 정리

## 조건문

### if : 특정 조건이 참인 경우 문장을 실행하기 위해 if 문을 사용한다. 선택적으로 조건이 거짓인 경우 문장을 실행하기 위해서는 else 절을 사용한다.
	
	var a = 1;
	var b = 2;
	if(a == b){
		console.log("true");
	}else {
		console.log("false");
	}
	
### switch  : 프로그램이 표현식을 평가하고  값을 조건과 비교한다. 값이 일치하면,  프로그램은 각 조건의 하위 문장을 실행한다.
	
	var num = 10;
	switch (num%2){
		case 0:
		console.log("짝수입니다.");
		break;

		case 1:
		console.log("홀수입니다.");
		break;

		default:
		console.log("숫자가 아닙니다.");
		break;
	}

### 삼항연산자 : ? 앞에 있는 조건을 기준으로 참이면 전자를 거짓이면 후자를 수행한다.

	var number = -5;
	(number > 0) ? console.log('양수') : console.log('음수');	

## 반복문

### for : 특정 조건이 거짓으로 판별될 때까지 반복한다.

	var step;
	for (step = 0; step < 5; step ++){
		console.log('hi');
	}

### for in: 개체의 각 속성이나 배열의 각 요소에 대해 하나 이상의 문을 실행한다.
	
	for (var i in 'string') { alert(i); } // 0, 1, 2, 3, 4, 5

### for of: for in문은 속성의 키를 반복하고 for of는 값을 반복한다. 
	
	for (var i of 'string') { alert(i); } // s, t, r, i, n, g

### while: 조건문이 참인 동안 문장을 반복하고 거짓일 때 루프를 벗어난다.
	
  var n = 0;
	var x = 0;
	while(n<3){
		n++
		x+=n;
		console.log(x); 
	}

### do while....:while문과 유사하나 무조건 한번은 실행된다.

  var i = 0;
	do {
		i+=1;
		console.log(i);
	}while(i < 5);

등등

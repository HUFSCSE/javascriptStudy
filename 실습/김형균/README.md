### 실습자료
### 3장 정리
##### number 
- 64bit 부동소수점
- int 형태의 나눗셈으로 하려면 Math.floor(_num) 이용

##### string
- 문자열
- 한 번 생성된 문자열은 읽기만 가능할 뿐 수정이 불가능 하다
- 수정을 하려면 어떻게 해야하나??- Search

##### boolean
- true
- false
- 1 , 0 으로 바꾸어 주면 type 이 number 로 바뀐다
- !! 연산자를 통해서 불린값으로 바꾸어 준다

##### null 과 undefined
- null 은 값이 비어있다는 의미
- undefined 는 초기화가 안 되었다는 의미
- null 타입 체크 console.log(_null === null)

##### 참조타입(객체타입)
- 객체 : key:value 구조의 프로퍼티를 저장하는 컨테이너, 여러 개의 프로퍼티를 포함할 수 있다
- 프로퍼티 : 객체에 속한 데이터, 기본 타입의 값을 포함하거나 다른 객체를 가리킬 수 있다
- value 값에 함수를 넣어주면 key 도 함수형태로 호출해야 한다

##### 객체 생성
###### Object 생성자 함수 이용
- var obj = new Object()
- obj.name = 'khk';
- obj.age = 26;

###### 객체 리터럴 방식 이용
- {} 를 이용해서 프로퍼티 키 : 벨류 형태로 표현
- 추후 obj.type = value; 로 추가해 줄 수 있다

###### 생성자 함수 이용
- 4 장에서 

##### 객체 프로퍼티 읽기/쓰기/갱신
###### 객체 접근 방법
- 대괄호([]) 표기법 : obj.name
- 마침표(.) 표기법 : obj['name']
- 프로퍼티에 예약어나 표현식이 들어가 있을 경호 대괄호 표기법 이용
- obj['full-name']

###### for in 문과 객체 프로퍼티 출력
- 객체의 프로퍼티가 하나씩 할당 된다
- for(var prop in obj){ console.log(prop,obj[prop]); }

###### 객체 프로퍼티 삭제
- delete 연산자는 객체 프로퍼티만 삭제할 뿐 객체 작체를 삭제할 순 없다
- delete(foo.name) : ( O )
- delete(foo) : ( X )  

##### 참조 타입의 특성
- 객체의 모든 연산은 실제값이 아닌 참조 값으로 처리된다
- Copy by Reference
- 값은 Copy by Value
- 값만 받아오려면 어떻게 해야하지?? - Search

###### 객체 비교
- 같은 형태의 프로퍼티 형태이더라도 다른 객체이다

###### 참조에 의한 함수 호출 방식
- 값은 Call by Value
- 객체는 Call by Reference

##### 프로토타입
- 부모 객체를 프로토 타입 객체라고 부른다
- foo.toString() //page 50p
- console.dir(obj)

##### 배열
- 배열의 크기를 지정할 필요가 없다
- 배열크기와 상관 없이 특정한 위치에 데이터를 저장할 수 있다
- 선언시 [] 를 통해서 배열이라고 알려준다
- length 는 배열의 크기를 의미한다 하지만 원소의 개수를 의미하진 않는다
- arr[idx] 를 통해서 배열을 확장, length = number 를 통해서 확장 및 축소가 가능하다
- push(value) 메소드를 통해서 배열의 끝에 값을 더해준다
- pop() 을 통해서 배열의 끝을 빼준다

###### 배열과 객체
- 객체는 length 와 push 함수가 없다

###### 배열의 프로퍼티 동적 생성
- 배열에 동적 프로퍼티를 생성할 수 있다
- 하지만 length 값이 변하지 않는다 
- 열거 방식이 in 이면 프로퍼티가 나오고
- length 로 하면 배열만 출력한다

###### 배열 요소 삭제
- delete arr[idx] 는 값이 삭제될 뿐, 공간은 남아있다
- splice(idx,1) 를 통해서 공간까지 삭제해 준다

###### Array() 생성자 함수
- new Array(size)
- new Array(values)

###### 유사 배열 객체
- length 프로퍼티를 가진 객체
- var obj = {name:"khk", length: 1};
- 4 장에서 더 자세히

##### 기본타입과 표준 메서드
- number.toExponential(1) //숫자를 지수형태로 변환
- string.charAt(idx) //해당 index char 반환

##### 연산자
- === : 값과 데이터 타입이 모두 같아야 true









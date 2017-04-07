## 1. 기본적으로 함수는 global 객체이다.
 - 직접함수를 호출하는 경우: this는 global객체가 됨
 - new로 생성하지 않으면 직접함수 호출과 같다 -> global객체가 됨

## 2.global 객체가 아닌 3가지경우(ECMAScript의 규약을 따를것)
 - function 영역에서의 this는 부모 객체이다. 단, 그 부모의 자식으로서 불렸을 떄에만 즉, 객체의 프로퍼티일때
 - new 연산자로 생성된 function 영역의 this는 새로 생성된 객체 그 자신이다.
/*4-10*/
//함수 표현식으로 foo() 함수 생성
var foo = function(func){
	func();
};
// foo() 함수 실행
foo(function(){
	console.log('Function은 인자로 사용될 수 있다.');
});
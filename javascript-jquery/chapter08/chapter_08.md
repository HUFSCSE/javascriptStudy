
# Chapter 08. BOM(Browser Object Model)

* 브라우저 객체 모델
* 브라우저의 정보, URL 정보, 모니터 화면 정보 등을 취득 하거나 제어할 수 있는 객체
* 객체?? 객체에는 속성, 메서드
* window 객체 alert(), prompt(), confirm() 매서드들을 window 객체의 내장 메서드
* window 메서드를 사용할때는 보통 앞의 widnow를 생략
*  브라우저 기반 자바스크립트의 최상위 객체
* var 키워드로 선언한 일반 변수도 모두 window 객체의 속성이 됨

```javascript
widnow.open("문서주소", "윈도우 이름", "옵션=값", "옵션=값", "옵션=값")
```

## 08-2 setInterval(), clearInterval(), setTimeout(), clearTimeout() 메서드

```
setInterval() : 일정 시간마다 지정한 함수를 반복적으로 실행하는 메서드
setTimeout() : 설정한 시간이 흐른 뒤에 지정한 함수를 한 번만 실행하는 메서드
clearInterval(), clearTimeout() : setInterval(), setTimeout() 메서드를 정지시키는 메서드
```
### <1> setInterval()메서드
```javascript
	setInterval(function()){
    	실행문
    },밀리초(1/1000초))
    
    setInterval(함수명, 밀리초(1/1000초))
```

```html
 <!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>setInterval 메서드</title>
	<style>
		* {margin:0; padding:0;}
		div {height: 30px; background: red;}
	</style>

	<script>
		window.onload = function(){
			var div_bg = document.getElementById("div_bg");
			var color = ["red", "green", "blue"];
			var i = 0;
			setInterval(function(){
				i++;
				if(i>2){
					i = 0;
				}
				div_bg.style.backgroundColor = color[i];
			},2000);
		}
	</script>
</head>
<body>
	<div id="div_bg"></div>
</body>
</html>
```

## setTimeout()메서드와 clearTimeout()메서드
* 실행된 메서드를 정지시키는 메서드
* 예제에서 setTimeout(), clearTimeout()을 이용하여 브라우저 사이즈 변경 시 body background 컨트롤

```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>setTimeout 메서드</title>
	<style>
		* {margin:0; padding:0;}
		body {background:red;}
	</style>
	<script>
		window.onload = function(){
			var bg = document.getElementById("bg");
			var color = ["red", "green", "blue"];
			var i = 0;
			var change_bg;
			this.onresize = function(){
				clearTimeout(change_bg);
				change_bg = setTimeout(function(){
					i++;
					if(i>2){
						i = 0;
					}
					bg.style.backgroundColor = color[i];
				},250);
			}
		}
	</script>
</head>
<body id="bg">
	
</body>
</html>
```


## Location 객체

* location 은 브라우저의 주소창 URL과 관련된 객체입니다.

###속성
* hash
* host
* hostname
* port
* pathname
* href
* protocol
* search

###메서드
* reload()
* replace()

## Screen 객체

* screen 객체는 모니터 화면 정보에 대한 객체입니다.

### 속성
* width
* height
* availWidth
* availHeight
* colorDepth
* pixelDepth

## History 객체
* history 객체는 페이지가 이동한 정보를 관리하느 객체입니다.

### history 객체 메서드
* back()
* foward()
* go()

## Navigator 객체

* navigator 객체는 브라우저 버전이나 브라우저명 등 브라우저 정보에 관한 객체입니다.

### navigator 객체 속성 및 메서드
* appCodeName
* appName
* appVersion
* platform
* userAgent

* 참조 url
- 정의, 특징, 역할에 대한 간략한 설명
http://www.ktword.co.kr/abbr_view.php?m_temp1=2519

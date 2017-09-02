# Method

#### 04-2 DOM 조작 메서드


- 값 (Setter & Getter) 메서드


| 구분        | Setter       | Getter |
| --------- | --------------- | ---------------|
| attr 메서드    | $(Selector).attr() |$(Selector).attr() |
| prop 메서드    | $(Selector).prop() |$(Selector).prop() |
| css 메서드    | $(Selector).css() | $(Selector).css() |
| width 메서드 | $(Selector).width()     |$(Selector).width()     |
| height 메서드  | $(Selector).height()      | $(Selector).height()      |
| offset 메서드  | $(Selector).offset()      | $(Selector).offset()      |
| scrollTop 메서드   | $(Selector).scrollTop()       |$(Selector).scrollTop()       |
| scrollLeft 메서드  | $(Selector).scrollLeft()      |$(Selector).scrollLeft()      |
| POSITION 메서드  |     |$(Selector).position()      |
| html 메서드  | $(Selector).html()      |$(Selector).html()      |
| text 메서드  | $(Selector).text()      |$(Selector).text()      |
| value 메서드  | $(Selector).val()      |$(Selector).val()      |
| innerWidth 메서드  | $(Selector).innerWidth()      |$(Selector).innerWidth()      |
| innerHeight 메서드  | $(Selector).innerHeight()      |$(Selector).innerHeight()      |
| outerWidth 메서드  | $(Selector).outerWidth()      |$(Selector).outerWidth()      |
| outerHeight 메서드  | $(Selector).outerHeight()      |$(Selector).outerHeight()      |


- attr Method

셀렉터의 속성 값을 설정합니다.
```javascript
1. attr_setter
$("#test").attr("class","클래스_수정");
1. attr_getter
$("#test").attr("class");
```
- prop Method

셀렉터의 속성 값을 설정합니다.
``` javascript
2. prop_setter
$("input").prop({ "checked" : "checked" });
2. prop_getter
$("input").prop({ "checked"});
```

.attr()과 .prop()는 무었이 다른가?

.attr()는HTML의속성을 취급
.prop()는JavaScript프로파티을 취급
양쪽은 같은 이름에서 다른게 있다.
이 두개의 메소드는 취급하는 정보가 다릅니다. .attr()는HTML의 속석(attribute)을、
.prop()는 JavaScript의 프로파티(property)를 취급하는 메소드입니다.
여기에서 혼란하기 십상인것이 속성과 프로파티는 「같지만 다른것」이라는 것입니다.
간단한 예로 링크의 URL입니다.
```
1	<a id="to_comments" href="#comments">코멘트 일람</a>
아무것도 없는 페이지안의 점프 링크입니다. 여기 링크URL는 .attr()과 .prop()의 어느쪽이라도 취득할수있다（！）라고 생각할수도 있지만 사실 다릅니다.
1	var $link = $('#to_comments');
2	alert($link.attr('href'));  // href속성값을 표시
3	alert($link.prop('href'));  // href프로파티의 값을 표시
그럼 무엇이 표시될까요?
.attr() → #to_comment
.prop() → http://example.com/path/to/page#to_comment
완전 다른결과가 나옵니다.……！ Σ(°д°;)
사실은 「속성」이란것은 HTML으로서 기록되어있는 속성의 내용입니다. 물론 당신이 href="http://…"라고 적었을경우는 그대로 취득할수있습니다.
한편「프로파티」라고 하는 것은 JavaScript취급하는 하는 정보입니다. 이정보는 HTML에 기록되어있는 내용과 일치한다고는 할수없습니다.
하나더 예를 들어보겠습니다. 체크박스의 checked의 대하여 입니다.
1	<checkbox id="private" type="checkbox" checked />
체크박스의 checked의 값을 확인합니다.
1	var $checkbox = $('#private');
2	alert($checkbox.attr('checked'));  // checked속성의 값을 표시
3	alert($checkbox.prop('checked'));  // checked프로파티값을 표시
자 무엇이 표시될까요?
.attr() → "checked"
.prop() → true
이것도 결과가 다릅니다.
또 화면의 체크박스를 클릭하여 체크를 해제해보겠습니다.
.attr() → "checked"
.prop() → false
.attr()의 경우는 변하지않습니다. 체크가 되어있는지 판단을 할경우 .prop()을 사용할 필요가 있습니다.
어떻습니까? 예상할수있었나요?
※또 [checked속성의 값은 왜 checked라고하는 문자열이 될까?]라는 이야긴 HTML의 이야기가 되기때문에 하지않겠습니다. 간단히 설명하면 checked, selected같은 값이 없는 속성의 값은 속성의 이름과 같아집니다.

일반적인 태그속성의 값을 변경하고자 할때는 attr()함수를 사용하고

태그속성에 따라서 기능이 제어되는 속성에 대해서는 prop()함수를 사용합니다.

```

- css Method

CSS 속성 값을 정의합니다.

```javascript
3. css_setter
$("#test").css("width", 500);
3. css_getter
$("#test").css("width");
```

- width height scrollTop scrollLeft offset Method


``` javascript

4. width_setter
$("#test").width("500px");
4. width_getter
$("#test").width();

5. height_setter
$("#test").height(500);
5. height_getter
$("#test").height() ;

6. offset_setter
$("#outer").offset({ top : 50, left : 50 });
6. offset_getter (문서 기준)
$("#outer").offset().left

7. scrollTop_setter
setTimeout(function() {
  $(document).scrollTop(300);
}, 0);
7. scrollTop_getter
$(document).scrollTop();

8. scrollLeft_setter
setTimeout(function() {
	$(document).scrollLeft(300);
}, 0);
 8. scrollLeft_getter
$(document).scrollLeft();

 7. position_getter (해당 엘리멘트 top, left기준)
var result = $("#outer").position().top + "px";
	result += ", " + $("#outer").position().left + "px";
	result += ", " + $("#inner").position().top + "px";
	result += ", " + $("#inner").position().left + "px";


```
https://jsfiddle.net/o2gxgz9r/13086/
예제
https://jsfiddle.net/o2gxgz9r/13089/
https://jsfiddle.net/o2gxgz9r/13097/
- html method

DOM 구조를 가져오거나 교체

```javascript
$("#test").html("<em>test</em>");
```

- text method

텍스트 내용을 가져오고나 새로 추가하거나 교체

```javascript
$("#test").text("test");
```

- val method

값을 가져오고나 새로 추가하거나 교체

```javascript
$("#test").val("test");
```
| method        | 내용       |
| --------- | --------------- |
| innerWidth()  | width + padding      |
| innerHeight() | height + padding      |
| outerWidth()   | width + padding + border      |
| outerWidth(true)  | width + padding + border + margin      |
| outerHeight() | height + padding + border      |
| outerHeight(true)  | height + padding + border + margin      |

- class method

| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| addClass 메서드    | $(Selector).addClass()  클래스 추가 |
| removeClass 메서드    | $(Selector).removeClass() 클래스 제거|
| toggleClass 메서드    | $(Selector).toggleClass() 클래스 토글|
| hasClass 메서드 | $(Selector).hasClass()   클래스 있는 확인 |

- data Method


| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| data 메서드    | $(Selector).data() 키 밸류 형태로 데이터 저장 및 호출|
| removeData 메서드    | $(Selector).removeData() 데이터 제거 |
| hasData 메서드 | $(Selector).hasData()  데이터 있는 확인  |


```javascript
1. 데이터설정

<script>
$('#test').data('name', 'kim');
$('#test').data('age', 10);
</script>

<div id="test"></div>

위와 같이 실행을 하면 아래와 같이 HTML Element에 데이터가 설정되는 효과가 있다.

<div id="test"
     data-name="kim"
     data-age=10>
</div>


2. 데이터조회

반대로 data의 값을 조회할 때는 아래와 같이 가능하다.

<script>
var name = $('#test').data('name'); // kim
var age = $('#test').data('age'); // 10
</script>

<div id="test"
     data-name="kim"
     data-age=10>
</div>
```

- replace method
-
| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| replaceWith 메서드    | $(Selector).replaceWith() 교체 |
| replaceAll 메서드 | $(Selector).replaceAll()  교체  |

```javascript
<div class="container">
  <div class="inner first">Hello</div>
  <div class="inner second">And</div>
  <div class="inner third">Goodbye</div>
</div>

$( "div.inner" ).replaceWith( "<h2>New heading</h2>" );
$( "<h2>New heading</h2>" ).replaceAll( ".inner" );

<div class="container">
  <h2>New heading</h2>
  <h2>New heading</h2>
  <h2>New heading</h2>
</div>

```

- Wrap method
-
| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| wrapAll 메서드    | $(Selector).wrapAll() 전체를 감쌈 |
| wrap 메서드 | $(Selector).wrap()  각각 감쌈  |
| wrapInner 메서드 | $(Selector).wrapInner()  각각 안쪽에 감쌈  |


```javascript
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>DOM manipulation wrap method</title>
<style>
#wrap div {
	width:100px;
	height:100px;
	border:1px solid
}

#outer > div {background:red}
#outer > div:first-child {background:green}
#inner {background:purple}
</style>
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
</head>
<body>

<!-- 실습 영역 -->
	<div id="wrap">
		<div>1strong	<strong></strong></div>
		<div>2</div>
		<div>3</div>
	</div>

<script>

// 결과 확인이 필요한 부분만 해당 주석을 풀어주세요.

// 1. wrapAll
//$('#wrap > div').wrapAll('<div id="outer"/>');

// 2. wrap
//$('#wrap > div').wrap('<div id="outer"/>');

// 3. wrapInner
//$('#wrap > div').wrapInner('<div id="inner"/>');
</script>
<!-- //실습 영역 -->
</body>
</html>
```
https://jsfiddle.net/o2gxgz9r/13131/


- Remove method
-
| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| removeAttr 메서드    | $(Selector).removeAttr() 속성 제거 |
| removeProp 메서드 | $(Selector).removeProp()  속성 제거  |
| empty 메서드 | $(Selector).empty()  하위 엘레멘트 제거  |
| remove 메서드 | $(Selector).remove()  셀렉터 포함 하위 까지 제거  |
| detach 메서드 | $(Selector).detach()  셀렉터 포함 하위 까지 제거 (데이트 이벤트 제거 안함)  |
| unwrap 메서드 | $(Selector).unwrap()  셀렉터 제외한 부모 엘리멘트 삭제 |




- Remove method
-
| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| prepend 메서드    | $(Selector).prepend() 하위 엘레멘트 맨 앞에 추가 |
| append 메서드 | $(Selector).append()  하위 엘레멘트 맨 뒤에 추가  |
| prependTo 메서드 | $(Selector).prependTo()  prepend 와 순서 바뀜 |
| appendTo 메서드 | $(Selector).appendTo()  append와순서 바뀜 |
| before 메서드 | $(Selector).before()  셀렉터 앞에 추가 |
| after 메서드 | $(Selector).after()  셀렉터 뒤에 추가 |
| insertBefore 메서드 | $(Selector).insertBefore()  before 와 순서 바뀜  |
| insertAfter 메서드 | $(Selector).insertAfter()  after 와 순서 바뀜 |

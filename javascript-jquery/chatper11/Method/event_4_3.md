# Method (1~3)

### 04-3 Event 메서드

#### 바인딩(binding 메서드)
- 웹 문서와 우리가 사용하는 입력장치(키보드, 마우스)를 연결하여 직접적으로 동작할 수 있게 하여 문서가 살아 숨 쉬는 형태로 보이게 생명력을 불어넣는 기능


| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| 1) bind 메서드    | $(Selector).bind() |
| 2) unbind 메서드    | $(Selector).unbind() |
| 3) delegate 메서드    | $(Selector).delegate() |
| 4) undelegate 메서드 | $(Selector).undelegate()     |
| 5) on 메서드  | $(Selector).on()      |
| 6) one 메서드  | $(Selector).one()      |
| 7) off 메서드   | $(Selector).off()       |
| 8) trigger 메서드  | $(Selector).trigger()      |
| 9) triggerHandler 메서드   | $(Selector).triggerHandler()       |

- 실습 코드
      
```html
<html>
<head>
	<meta charset="UTF-8">
	<title>Event Method - Binding</title>
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
</head>
<body>
	<!-- 실습 영역 -->
	<button type="button">click 이벤트 테스트하기, #1</button>
	<button type="button">click 이벤트 테스트하기, #2</button>
	
	<!-- 결과 영역 -->
	<div id="result" style="display: none; margin-top: 10px;">
		<div class="text" style="display: none;">
			<p><strong>* text 결과</strong></p>
			<p class="description"></p>
		</div>
	</div>
	<script>
		function resultText( target ) {
			var $result = $("#result");

			$result
				.show()
				.find(".text")
				.show();

			if( !target ) {
				$result
					.find(".text .description")
					.text("값 없음.");
				if( target.length != 0 ) {
					$result
						.find(".text .description")
						.text( target );
				}
			} else {
				$result
					.find(".text .description")
					.text( target );
			}
		}

		//on - off
/*		$("button").on("click", function(){
			resultText("버튼을 클릭했습니다.");
		});

		$("button").off("click");
		$("button").off();*/

		$("button").trigger("click");
			resultText(".trigger()메서드로 호출하면 이벤트가 등록된 객체의 수에 따라 함수를 여러번 호출합니다.");

	</script>
</body>
</html>
```


- bind 메서드

해당 셀렉터에 마우스나 키보드 그리고 기타 움직임에 대해서 반응하여 발생할 이벤트에 대한 코드를 작성할 수 있다.

- unbind 메서드

해당 셀렉터에 적용되어 있는 bind 이벤트를 삭제한다. 인자(argument)를 설정하면 설정한 이벤트 타입에만 적용되지만
설정하지 않으면 전체 이벤트 타입에 적용된다.

- delegate 메서드

해당 셀렉터의 마우스나 키보드 그리고 기타 움직임에 대해서 반응하여 발생할 이벤트에 대해서 코드를 작성할 수 있다.
미래에 추가적으로 만들어질 엘리먼트에 동일한 기능을 적용한다.

- undelegate 메서드

해당 셀럭터에 작성한 delegate 이벤트를 삭제한다. 인자를 설정하면 설정한 이벤트 타입에만 적용되지만
설정하지 않으면 전체 이벤트 타입에 적용된다.

- on 메서드

bind 와 delegate 메서드의 기능을 통합한 메서드이다. 인자 값에 따라서 기능을 다르게 작동 할 수 있다.

- one 메서드

해당 셀렉터에 이벤트 타입과 이벤트 핸들러를 부착해 이벤트를 작성, 부착한다는 점에서 on()메서드와 동일하게 작동하지만
작동 횟수에 차이가 있다. one()메서드는 단 한 번만 실행한다.

- off 메서드

해당 셀렉터에 작성한 bind()에 해당하는 on()메서드의 이벤트를 삭제한다. 인자를 설정하면 설정한 이벤트 타입에만 적용되지만 설정하지 않으면 전체 이벤트 타입에 적용된다.

- trigger 메서드

해당 셀렉터에 정의한 이벤트 함수를 강제로 실행합니다. 존재하는 모든 엘리먼트마다 함수를 발생한다.

- triggerHandler 메서드

해당 셀렉터에 정의한 이벤트 함수를 강제로 실행합니다. 단 첫 번째 엘리먼트에만 작동합니다.
즉, 한 번만 실행된다는 것이다. 이벤트의 실행 횟수 관점에서 보았을 때 trigger()와 triggerHandler()메서드의
관계는 on(), off() 메서드와 비슷합니다.

bind, delegate 차이점 설명
http://ankyu.entersoft.kr/Lecture/jquery/jquery_02_11.asp


-----


#### 문서 준비(Document Ready) 메서드

| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| ready   | $(document).ready() |


- ready 메서드

문서(document)의 준비가 완료되었을 때를 알려 주는 메서드입니다.

```javascript
	window.onload = function(){
    	alert("문서가 로딩되었습니다. : window.onload");
    }
    
    $(function(){
    	//작성 코드
    });

```

javascript와 jquery 코드
 : 제이쿼리 함수 ($())에 이름 없는 함수를 인자로 넘겼을 때에는 ready()메서드와 동일하게 작동합니다.


#### 마우스 클릭(click) 메서드


| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| 1) click 메서드   | $(selector).click() |
| 1) dbclick(double click) 메서드   | $(selector).dbclick() |
| 1) mousedown 메서드   | $(selector).mousedown() |
| 1) mouseup 메서드   | $(selector).mouseup() |

- click 메서드

마우스 이벤트(click)를 간편하게 사용할 수 있도록 만들어진 메서드. 마우스 버튼이 한 번 클릭했을 때
이벤트 핸들러 함수를 실행한다.

- dbclick(double click)메서드

마우스 이벤트(double click)를 간편하게 사용할 수 있도록 만들어진 메서드. 마우스의 버튼이 두번 연속으로 클릭했을 때
이벤트 핸들러 함수를 실행합니다.

- mousedown 메서드

마우스의 버튼이 클릭되어 눌려졌을 때 이벤트 핸들러 함수를 실행합니다.

- mouseup 메서드

마우스의 버튼이 클릭 후 떼어졌을 때 이벤트 핸들러 함수를 실행합니다.

``` html

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
</head>
<body>
	<button type="button">마우스 클릭테스트</button>
	<div id="result" style="display: none; margin-top: 100px;">
		<div class="text" style="display: none;">
			<p><strong>* text result</strong></p>
			<p class="description"></p>
		</div>
	</div>

	<script>
		function resultText( target ) {
			var $result = $("#result");
			
			$result
				.show()
				.find(".text")
				.show();
				
			if( !target ) {
				$result
					.find(".text .description")
					.text("값 없음.");
				if( target.length != 0 ) {
					$result
						.find(".text .description")
						.text( target );
				}
			} else {
				$result
					.find(".text .description")
					.text( target );
			}
		}


		// 1. click
		//$('button').click(function() {
		//	resultText("<button>을 클릭했습니다.");
		//});

		// 2. double click
		$('button').dblclick(function() {
		resultText("<button>을 더블 클릭했습니다.");
		});

		// 3. mousedown
		//$('button').mousedown(function() {
		//	resultText("<button>에 마우스 버튼을 누른 상태입니다.");
		//});

		// 4. mouseup
		//$('button').mouseup(function() {
		//	resultText("<button>에 마우스 버튼을 뗀 상태입니다.");
		//});
	</script>
</body>
</html>

```

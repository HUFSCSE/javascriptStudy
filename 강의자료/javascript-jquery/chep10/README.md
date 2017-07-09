#### jQuery 정의 및 사용법

 1.  jQuery의 정의

     - 자바스크립트를 보다 쉽게 사용할 수 있도록 만들어진 자바스크립트 라이브러리.
     - 작은 함수들을 가지고 있는 큰 함수덩어리라고 할 수 있다.

     2. 라이브러리 다운로드 & API 문서

       - 직접 다운로드(http://jquery.com/download/) 하거나 HTML 파일에 라이브러리 import

    - API 문서 : http://api.jquery.com/



### 실습도구 제작

1. Selector 1단계

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Selector #1</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body>

   	<p>P 태그</p>
   	<div>DIV 태그</div>
   	<p>P 태그</p>

   <script>
   // 함수 선언 : resultSelector
   function resultSelector( selector ) {
   	selector.css({ outline : "3px solid red" });
   }

   // 함수 실행 : resultSelector
   resultSelector( $("p") );
   </script>
   </body>
   </html>
   ```
   ​

2. Selector 2단계

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Selector #2</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body>

   	<p>P 태그</p>
   	<div>DIV 태그</div>
   	<p>P 태그</p>

   <script>
   // 함수 선언 : resultSelector
   function resultSelector( selector, lineColor ) {
   	if( !lineColor ) lineColor = "red";
   	selector.css({ outline : "3px solid " + lineColor });
   }

   // 함수 실행 : resultSelector
   resultSelector( $("p") );
   resultSelector( $("div"), "blue" );
   </script>
   </body>
   </html>
   ```
   ​

3. Boolean

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Boolean</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body id="boolean">

   <div id="result" style="display:none; margin-top:100px">
   	<div class="boolean" style="display:none">
   		<p><strong>* Boolean 결과 값</strong></p>
   		<div class="true" style="color:#fff; background:blue">TRUE</div>
   		<div class="false" style="color:#fff; background:red">FALSE</div>
   	</div>
   </div>

   <script>
   // 함수 선언 : resultBoolean
   function resultBoolean( target ) {
   	var $result = $("#result");
   	
   	$result
   		.show()
   		.find(".boolean")
   		.show();
   		
   	if( target ) {
   		$result
   			.find(".boolean .false")
   			.hide();
   	} else {
   		$result
   			.find(".boolean .true")
   			.hide();
   	}
   }

   // 함수 실행 : resultBoolean
   resultBoolean( $("body").is("#boolean") );
   </script>
   </body>
   </html>
   ```
   ​

4. Text

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Text</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body class="클래스 결과값을 표시합니다.">

   <div id="result" style="display:none; margin-top:100px">
   	<div class="text" style="display:none">
   		<p><strong>* TEXT 결과 값</strong></p>
   		<p class="description" style="background:#eee"></p>
   	</div>
   </div>
   <script>
   // 함수 선언 : resultText
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

   // 함수 실행 : resultText
   resultText( $("body").attr("class") );
   </script>
   </body>
   </html>
   ```
   ​

5. Value

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Value</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body>

   	<input type="text" value="value 값 테스트하기">

   <div id="result" style="display:none; margin-top:100px">
   	<div class="value" style="display:none">
   		<p><strong>* Value 결과 값</strong></p>
   		<p class="description" style="background:#eee"></p>
   	</div>
   </div>
   <script>
   // 함수 선언 : resultValue	
   function resultValue( target ) {
   	var $result = $("#result");
   	
   	$result
   		.show()
   		.find(".value")
   		.show();
   		
   	if( !target ) {
   		$result
   			.find(".value .description")
   			.text("값 없음.");
   		if( target.length != 0 ) {
   			$result
   				.find(".value .description")
   				.text( target );
   		}
   	} else {
   		$result
   			.find(".value .description")
   			.text( target );
   	}
   }

   // 함수 실행 : resultValue
   resultValue( $("input").val() );
   </script>
   </body>
   </html>
   ```
   ​

6. HTML

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Html</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body>

   	<ul>
   		<li>1</li>
   		<li>2</li>
   		<li>3</li>
   	</ul>

   <div id="result" style="display:none; margin-top:100px">
   	<div class="html" style="display:none">
   		<p><strong>* HTML 결과 값</strong></p>
   		<p class="description" style="background:#eee"></p>
   	</div>
   	<div class="result_html" style="display:none"></div>
   </div>
   <script>
   // 함수 선언 : resultHtml
   function resultHtml( target ) {
   	var $result = $("#result");

   	$result
   		.show()
   		.find(".html")
   		.show();
   		
   	if( !target ) {
   		$result
   			.find(".html .description")
   			.text("값 없음.");
   	} else {
   		if( target.length != 0 ) {
   			$result
   				.find(".html .description")
   				.empty()
   				.text( 
   					$(".result_html")
   						.append( $(target).clone() )
   						.html()
   				);
   		} else {
   			$result
   				.find(".html .description")
   				.text("값 없음.");
   		}
   	}
   }

   // 함수 실행 : resultHtml
   resultHtml( $("ul") );
   </script>
   </body>
   </html>
   ```
   ​

7. Array

   ```javascript
   <!doctype html>
   <html lang="ko">
   <head>
   <meta charset="utf-8">
   <title>결과값표시기능 - Array</title>
   <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   </head>
   <body>

   <div id="result" style="display:none; margin-top:100px">
   	<!-- Result : Array -->
   	<div class="array" style="display:none">
   		<p><strong>* Array 결과 값</strong></p>
   		<p class="description" style="background:#eee"></p>
   	</div>
   </div>
   <script>
   // Result : Array
   function resultArray( target, name ) {
   	var $result = $("#result");
   	
   	$result
   		.show()
   		.find(".array")
   		.show();
   		
   	if( !target ) {
   		$result
   			.find(".array .description")
   			.text("값 없음.");
   	} else {
   		$result
   			.find(".array .description")
   			.html(
   				$.map(target, function( data ) {
   					if( !name ) {
   						return data;
   					} else {
   						return data[ name ];
   					}
   				}).join(", ")
   			);
   	}
   }

   // 함수 실행 : resultArray(1)
   //resultArray( [1, 2, 3, 4, 5] );

   // 함수 실행 : resultArray(2)
   resultArray( [{value:1}, {value:2}], "value" );
   </script>
   </body>
   </html>
   ```

   ​

### 선택자

1. CSS 기반 셀렉터

   1. 기본 셀렉터

      | 구분          | 셀렉터 작성 코드                  |
      | ----------- | -------------------------- |
      | 타입(태그) 셀렉터  | $("tag")                   |
      | 전체 셀렉터      | $("*")                     |
      | 아이디 셀렉터     | $("#id")                   |
      | 클래스 셀렉터     | $(".class")                |
      | 그룹 셀렉터      | $("selectorA, selectorB")  |
      | 자손 콤비네이터    | $("selectorA selectorB")   |
      | 자식 콤비네이터    | $("selectorA > selectorB") |
      | 다음 형제 콤비네이터 | $("selectorA + selectorB") |
      | 인접 형제 콤비네이터 | $("selectorA ~ selectorB") |

      - HTML

      ```javascript
      <!-- 실습 영역 -->
      <div style="margin:10px">
      	<a href="#">A 태그</a>
      	<p class="first tag">P 태그 class="first"</p>
      	<a href="#">A 태그</a>
      	<p><a href="#">P 태그, A 태그</a></p>
      	<p class="tag"><a href="#">P 태그, A 태그</a></p>
      	<span>SPAN 태그</span>
      	<a href="#">A 태그</a>
      	<p id="last">P 태그, id="last"</p>
      </div>
      ```

      

   2. 필터 셀렉터

      | 구분                 | 셀렉터 작성 코드                                |
      | ------------------ | ---------------------------------------- |
      | nth-child 표현식      | $("nth-child(index,even,odd,equation)")  |
      | first-child 표현식    | $(":first-child")                        |
      | nth-last-child 표현식 | $(":nth-last-child(index,even,odd,equation)") |
      | last-child 표현식     | $(":last-child")                         |
      | only-child 표현식     | $(":only-child")                         |
      | nth-of-type        | $(":nth-of-type(index,even,odd,equation)") |
      | first-of-type      | $(":first-of-type")                      |
      | nth-last-of-type   | $(":nth-last-of-type(index,even,odd,equation)") |
      | last-of-type       | $(":last-of-type")                       |
      | only-of-type       | $(":only-of-type")                       |
      | empty              | $(":empty")                              |
      | not                | $(":not(selector)")                      |
      | enabled            | $(":enabled")                            |
      | disabled           | $(":disabled")                           |
      | checked            | $(":checked")                            |
      | focus              | $(":focus")                              |
      | target             | $(":target")                             |

      - nth-child 표현식

        부모태그를 기준으로 자식태그의 순번을 조금 더 세부적으로 판단하여 선택할 수 있도록 정의하는 표현식.

        순번(index, 1부터 시작), 키워드(odd:홀수, even:짝수), 수식(an+b, n은 0부터 시작) 등의 값이 표현식으로 올 수 있음.

      - nth-of-type 표현식

        nth-child() 표현식과 같은방식으로 작동. 다만 각각의 태그에 대해서 개별적으로 판단하여 선택하는 표현식.

      - empty 표현식

        자식노드(태그와 택스트 포함)가 존재하지 않을 때를 판단하는 표현식

      - HTML_1

      ```javascript
      <div>
      		<strong>STRONG 태그 : 1</strong>
      		<em>EM 태그 : 1</em>
      		<div>DIV 태그 : 1</div>
      		<p>P 태그 : 1</p>
      		<div>DIV 태그 : 2</div>
      		<div style="height:18px"></div>
      		<p>P 태그 : 2 <strong>STRONG 태그 : 1</strong></p>
      		<div>DIV 태그 : 3</div>
      		<p>P 태그 : 3</p>
      	</div>
      ```
      - checked 표현식

        라디오, 체크박스, select 태그의 체크 상태를 판단하는 표현식.

        :checked 와 :selected의 상태를 모두 포함하기 때문에 <select> 태그에서만 동작하려면 :selected 표현식을 사용해야 한다.

      - HTML_2

      ```javascript
      <div>
      		<a href="#target" id="click">A 태그 : 1, href="#target" id="click"</a>
      		<p id="target" tabIndex="1">P 태그 : 1, id="target"</p>
      		<input type="text" id="input_text" value='id="input_text"'>
      		<input type="text" disabled value=":disabled">
      		<input type="checkbox">
      		<input type="checkbox" checked>
      		<input type="radio">
      		<input type="radio" checked>
      		<select>
      			<option>SELECT 태그 : 1</option>
      			<option selected>SELECT 태그 : 2</option>
      		</select>
      	</div>
      ```

      ​

   3. 속성 셀렉터

      | 구분                       | 셀렉터 작성 코드            |
      | ------------------------ | -------------------- |
      | 속성 표현식                   | $("[속성]")            |
      | 속성값 표현식                  | $("[속성=값]")          |
      | 다중 속성값 표현식               | $("[속성1=값1][속성2=값2") |
      | 단어 일치 표현식                | $("[속성~=값]")         |
      | 앞에 붙는 단어(접두사, prefix)표현식 | $("[속성\|=값]")        |
      | 시작 단어 표현식                | $("[속성^=값]")         |
      | 종료 단어 표현식                | $("[속성$=값]")         |
      | 단어 표함 표현식                | $("[속성*=값]")         |

   - HTML

     ```html
     <!-- 1. [attr] : 속성 표현식 -->
     <div id="">DIV 태그, id=""</div>
     <div class="">DIV 태그, class=""</div>

     <!-- 2. [attr=value] : 속성값 표현식 -->
     <div class="">DIV 태그, class=""</div>
     <div class="class_one">DIV 태그, class="class_one"</div>
     <div class="class_one class_two">DIV 태그, class="class_one class_two"</div>

     <!-- 3. [attr1=value1][attr2=value2] : 다중 속성 값 표현식 -->
     <div class="class_one">DIV 태그, class="class_one"</div>	
     <div id="id_one" class="class_one">DIV 태그, id="id_one" class="class_one"</div>

     <!-- 4. [attr~=value] : 단어 일치 표현식 -->
     <div class="class_one">DIV 태그, class="class_one"</div>	
     <div class="class_one class_two">DIV 태그, class="class_one class_two"</div> 

     <!-- 5. [attr|=value] : 앞에 붙는 단어(접두사, prefix) 표현식 -->
     <div class="class_one">DIV 태그, class="class_one"</div>	
     <div class="class-one">DIV 태그, class="class-one"</div> 

     <!-- 6. [attr^=value] : 시작 단어 표현식 -->
     <div class="class">DIV 태그, class="class"</div>	
     <div class="one class">DIV 태그, class="one class"</div>	
     <div class="classone">DIV 태그, class="classone"</div>	
     <div class="class_one">DIV 태그, class="class_one"</div>
     <div class="class-one">DIV 태그, class="class-one"</div> 

     <!-- 7. [attr$=value] : 종료 단어 표현식 -->
     <div class="one">DIV 태그, class="one"</div>	
     <div class="one class">DIV 태그, class="one class"</div>	
     <div class="classone">DIV 태그, class="classone"</div>	
     <div class="class_one">DIV 태그, class="class_one"</div>
     <div class="class-one">DIV 태그, class="class-one"</div> 

     <!-- 8. [attr*=value] : 단어 포함 표현식 -->
     <div class="class_one">DIV 태그, class="class_one"</div>	
     <div class="classone">DIV 태그, class="class one"</div>	
     <div class="one_class">DIV 태그, class="one_class"</div>	
     <div class="oneclass">DIV 태그, class="one class"</div>	
     <div class="one-class_one">DIV 태그, class="one-class_one"</div>	
     <div class="oneclassone">DIV 태그, class="oneclassone"</div>
     ```

2. jQuery 확장 셀렉터

   1. 속성 셀렉터

      | 구분         | 셀렉터 작성 코드    |
      | ---------- | ------------ |
      | 단어 불일치 표현식 | $("[속성!=값]") |

      - HTML

      ```html
      <div class="class_one">DIV 태그, class="class_one"</div> 
      <div class="class_two">DIV 태그, class="class_two"</div>
      <div class="class_thr">DIV 태그, class="class_thr"</div>
      ```

   2. 폼 셀렉터

      | 구분           | 셀렉터 작성 코드      |
      | ------------ | -------------- |
      | input 표현식    | $(":input")    |
      | text 표현식     | $(":text")     |
      | password 표현식 | $(":password") |
      | image 표현식    | $(":image")    |
      | file 표현식     | $(":file")     |
      | checkbox 표현식 | $(":checkbox") |
      | radio 표현식    | $(":radio")    |
      | selected 표현식 | $(":selected") |
      | button 표현식   | $(":button")   |
      | reset 표현식    | $(":reset")    |
      | submit 표현식   | $(":submit")   |

      -  HTML

      ```html
      <input type="text" value="INPUT 태그, :text">
      <input type="text" value="INPUT 태그, :disabled" disabled>
      <input type="password" value="INPUT 태그, :password">
      <input type="image" src="image.jpg">
      <input type="file">
      <input type="checkbox">
      <input type="checkbox" checked>
      <input type="radio">
      <input type="radio" checked>
      <select>
      	<option>SELECT 태그, 가</option>
      	<option>SELECT 태그, 나</option>
      </select>
      <input type="button" value="INPUT 태그, :button">
      <button type="reset">BUTTON 태그, :reset</button>
      <button type="submit">BUTTON 태그, :submit</button>
      ```

   3. 필터 셀렉터

      - 순서를 판단하는 셀렉터

      | 구분        | 셀렉터 작성 코드       |
      | --------- | --------------- |
      | eq 표현식    | $(":eq(index)") |
      | gt 표현식    | $(":gt(index)") |
      | lt 표현식    | $(":lt(index)") |
      | first 표현식 | $(":first")     |
      | last 표현식  | $(":last")      |
      | even 표현식  | $(":even")      |
      | odd 표현식   | $(":odd")       |

        - eq 표현식

      선택된 한개이상의 셀렉터에서 세부적으로 index를 정의하는 표현식, index는 0부터 시작함

      ​

      - 존재 상태를 판단하는 셀렉터

      | 구분           | 셀렉터 작성 코드            |
      | ------------ | -------------------- |
      | header 표현식   | $(":header")         |
      | parent 표현식   | $(":parent")         |
      | has 표현식      | $(":has(Element)")   |
      | contains 표현식 | $(":contains(Text)") |

      - has 표현식

      특정한 셀렉터를 포함하고 있는 태그를 필터링 하는 표현식

      - contains 표현식

      특정한 Text(html) 를 포함하고 있는 태그를 필터링 하는 표현식

      ​

      - 시각적 상태를 판단하는 셀렉터

      | 구분           | 셀렉터 작성 코드      |
      | ------------ | -------------- |
      | visible 표현식  | $(":visible")  |
      | hidden 표현식   | $(":hidden")   |
      | animated 표현식 | $(":animated") |

      - hidden 표현식

      시각적으로 확인이 가능하지 않은 상태(display:none, input type=hidden?) 를 판단하는 표현식

      - animated 표현식

      jQuery .animate() 메서드로 에니메이션을 지정한 태그들을 판단하는 표현식, 다른 방법으로 구현한 애니메이션의 상태는 구별하지 못함.

      ​

      - HTML

      ```html
      <h1>Filter Selector Examples</h1>
      <h2 style="display:none">숨겨진 H2 태그</h2>
      <ul>
      <li>LI 태그, #1</li>
      <li>LI 태그, #2</li>
      <li><strong>LI 태그, #3</strong></li>
      <li><strong>LI 태그, #4</strong></li>
      <li>LI 태그, #5</li>
      <li>LI 태그, #6</li>
      </ul>
      <div style="position:absolute; top:250px; left:0; width:50px; height:50px"></div>
      ```

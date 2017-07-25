# Method

#### 04-1 DOM 탐색 메서드

- 메서드(Method)는 셀렉터(Selector)를 통해 선택한 태그가 작성한 코드에 맞게
행독하도록 미리 정의해 놓은 '동작'에 해당하는 함수이다.
- 제이쿼리의 핵심은 셀렉터이지만 사용자들이 편리하고 유용하다고 생각하는 부분은 메서드에 해당한다.  

- 기본(Basic) 탐색 메서드


| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| children 메서드    | $(Selector).children() |
| closest 메서드    | $(Selector).closest() |
| find 메서드    | $(Selector).find() |
| next 메서드 | $(Selector).next()     |
| nextAll 메서드  | $(Selector).nextAll()      |
| nextUntil 메서드  | $(Selector).nextUntil()      |
| offsetParent 메서드   | $(Selector).offsetParent()       |
| parent 메서드  | $(Selector).parent()      |
| parents 메서드   | $(Selector).parents()       |
| parentsUntil 메서드  | $(Selector).parentsUntil()      |
| prev 메서드   | $(Selector).prev()       |
| prevAll 메서드  | $(Selector).prevAll()      |
| prevUntil 메서드   | $(Selector).prevUntil()       |
| siblings 메서드  | $(Selector).siblings()      |

- 실습 코드
      
```html
<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Selector</title>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	</head>
	<body>

	<div id="root_wrap" style="position: relative">
	    <div id="root">
		<p id="first">P tag : 1 #first</p>
		<p>P tag : 2</p>
		<p id="target"><a href="#"><b>P tag : 3 #target</b></a> </p>
		<p>P tag : 4</p>
		<p><b>P tag : 5</b></p>
		<p id="last">P tag : 6 #last</p>
	    </div>
	</div>

	<script>
	    function resultSelector( selector, lineColor){
		if( !lineColor ) lineColor = "red";
		selector.css({ outline : "3px solid " + lineColor});
	    }
	</script>
	</body>
	</html>
```


- children Method

해당 셀렉터 기준으로 한 단계 아래의 자식 엘리먼트를 탐색합니다.
  
- closest Method

해당 셀렉터 기준으로 상위로 지정하는 부분의 단계까지 탐색합니다.

- find Method

해당 셀렉터 기준으로 하위로 지정한 부분을 탐색합니다.

- next Method

해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 다음에 해당하는 것을 탐색합니다.

- nextAll Method

해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 다음에 해당하는 것을 한 개 이상 탐색합니다.

- nextUntil Method

해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 다음에 해당하는 것을 한 개 이상 탐색합니다.

- offsetParent Method

해당 셀렉터 기준으로 상위 단계의 엘리먼트 중에 위치한 즉,
css 의 속성 중 포지션 속성을 지정한 것을 탐색합니다.

- parent Method

해당 셀렉터 기준으로 바로 한 단계 상위의 엘리먼트를 탐색합니다.
  
- parents Method

해당 셀렉터 기준으로 상위의 엘리먼트를 한 개 이상 탐색합니다.
  
- parentsUntil Method

해당 셀렉터 기준으로 지정한 부분의 바로 전 단계의 상위 엘리먼트를 한 개 이상 탐색합니다.
단, 뒤에 인자로 지정한 셀렉터는 선택에서 제외합니다.
  
- prev Method

해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 이전에 해당하는 것을 탐색합니다.
  
- prevAll Method

해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 이전에 해당하는 것을 한 개 이상 탐색합니다.
  
- prevUntil Method

해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 이전에 해당하는 것을 한 개 이상 탐색합니다.
단, 앞서 살펴본 .prevAll() 메서드와 기능이 유사하나 .prevUntil() 메서드에 지정한
셀렉터의 바로 전 까지가 이에 해당합니다.
  
- siblings Method

해당 셀렉터를 제외한 같은 단계의 엘리먼트를 탐색합니다.

-----
      

- 그 외(Miscellaneous) 탐색 메서드

| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| add 메서드    | $(Selector).add() |
| addBack 메서드    | $(Selector).addBack() |
| contents 메서드    | $(Selector).contents() |
| end 메서드 | $(Selector).end()     |

- add Method

셀렉터를 추가적으로 지정하기 위해 사용합니다. 
    
- addBack Method

결과물을 반환하는 제이쿼리 객체는 항상 바로 상위에 객체(prevObject) 를 함께 저장해 놓고 있는데, 이를 참고하여 탐색 후에 해당 셀렉터와 함께 추가적으로 상위 엘리먼트를 선택합니다.

- contents Method

해당 셀렉터를 기준으로 한 단계 아래의 자식을 탐색하는 children(0 메서드와 기능이 유사하지만 텍스트 노드까지 포함합니다.

- end Method

뿌리 엘리먼트에 해당하는 것을 찾아갑니다. 즉, 최초에 셀렉터를 작성해 얻어낸 결과물인 제이쿼리 객체, $(Selector) 를 탐색합니다.

-----

- 필터(Filter) 메서드

| 구분        | 메서드 작성 코드       |
| --------- | --------------- |
| filter 메서드    | $(Selector).filter() |
| eq 메서드    | $(Selector).eq() |
| first 메서드    | $(Selector).first() |
| last 메서드 | $(Selector).last()     |
| slice 메서드  | $(Selector).slice()      |
| map 메서드  | $(Selector).map()      |
| has 메서드   | $(Selector).has()       |
| is 메서드  | $(Selector).is()      |
| not 메서드   | $(Selector).not()       |
      
- 실습 코드

```html
<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Selector</title>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	</head>
	<body>

	<div id="root_wrap" style="position: relative">
	    <div id="root">
		<p id="first">P tag : 1 #first</p>
		<p>P tag : 2</p>
		<p id="target"><a href="#"><b>P tag : 3 #target</b></a> </p>
		<p>P tag : 4</p>
		<p><b>P tag : 5</b></p>
		<p id="last">P tag : 6 #last</p>
	    </div>
	</div>

	<div id="result" style="display: none; margin-top: 100px">
	    <div class="text" style="display: none;">
		<p><strong>* Text 결과값</strong></p>
		<p class="description"></p>
	    </div>
	    <div class="boolean" style="display: none;">
		<p><strong>* Boolean 결과값</strong></p>
		<div class="true" style="color:#fff;background: blue">TRUE</div>
		<div class="false" style="color:#fff;background: red">FALSE</div>
	    </div>
	</div>

	<script>
	    function resultSelector( selector, lineColor){
		if( !lineColor ) lineColor = "red";
		selector.css({ outline : "3px solid " + lineColor});
	    }
	</script>
	</body>
	</html>
```


- filter Method

해당 셀렉터를 조금 더 상세하게 탐색합니다. filter() 메서드의 인자를 다음과 같이
설정할 수 있고 필터링한 값을 불린(boolean) 값 중, true 이거나 이에 해당하는 엘리먼트를
결과로 반환합니다.
  
- eq Method

해당 셀렉터를 조금 더 세부적으로 판단하여 선택할 수 있도록 순서('index')를 정의합니다. 
순번은 0을 기초로 하며 정수를 지정할 수 있습니다. 
셀렉터 표현식, $(":eq()") 표현식과 같은 결과를 보여줍니다.

- first Method

해당 셀렉터의 첫 번째 순번을 판단하여 선택합니다. 셀렉터 표현식
$(":eq(0)"), $(":lt(1)"), $(":first-child") 표현식과 같은 결과를 보여줍니다.

- last Method

해당 셀렉터의 마지막 번째 순번을 판단하여 선택합니다. 셀렉터 표현식
$(":eq(-1)"), $(":gt(-2)"), $(":last-child") 표현식과 같은 결과를 보여줍니다.

- slice Method

eq() 메서드는 하나의 값만 지정할 수 있었지만, slice() 메서드는 시작과 끝의 순번을
지정하여 이 범위에 해당하는 엘리먼트를 판단할 수 있습니다. 순번('index')은 0을 기초로 하며
정수로 지정할 수 있습니다. 마지막 순번은 옵션으로 설정할 수 있는데, 
만약 값을 생략하면 자동적으로 끝 순번의 값으로 지정됩니다.

- map Method

map 메서드는 앞서 살펴본 filter() 메서드와 기능이 유사하다고 볼 수 있지만 
메서드를 정의한 개념이 조금 다릅니다. filter() 메서드는 일치하는 해당 엘리먼트만 
반환 시키지만, map() 메서드는 가공을 거쳐서 결과값을 다른 객체로 옮겨 담을 수도 있습니다.
이는 분명히 다른 개념이기 때문에 구현 요구 사항에 맞춰 사용을 다르게 하는 것이 좋습니다.

- has Method

인자로 지정한 설렉터를 자손 엘리먼트로 가지고 있는지 판단합니다.

- is Method

인자로 지정한 셀렉터가 존재하는지 판단합니다. 메서드를 사용할 때 결과값을 
불린(Boolean, true/false) 타입으로 넘겨준다는 점을 주의해야 합니다.
  
- not Method

인자로 지정한 셀렉터와 일치하지 않을 엘리먼트를 판단합니다.
  
-----
      
      

#### 04-2 DOM 조작 메서드dkfjdjfkdjk

- 메서드(Method)는 셀렉터(Selector)를 통해 선택한 태그가 작성한 코드에 맞게
행독하도록 미리 정의해 놓은 '동작'에 해당하는 함수이다.
- 제이쿼리의 핵심은 셀렉터이지만 사용자들이 편리하고 유용하다고 생각하는 부분은 메서드에 해당한다.  

      - 기본(Basic) 탐색 메서드

      | 구분        | 메서드 작성 코드       |
      | --------- | --------------- |
      | children 메서드    | $(Selector).children() |
      | closest 메서드    | $(Selector).closest() |
      | find 메서드    | $(Selector).find() |
      | next 메서드 | $(Selector).next()     |
      | nextAll 메서드  | $(Selector).nextAll()      |
      | nextUntil 메서드  | $(Selector).nextUntil()      |
      | offsetParent 메서드   | $(Selector).offsetParent()       |
      | parent 메서드  | $(Selector).parent()      |
      | parents 메서드   | $(Selector).parents()       |
      | parentsUntil 메서드  | $(Selector).parentsUntil()      |
      | prev 메서드   | $(Selector).prev()       |
      | prevAll 메서드  | $(Selector).prevAll()      |
      | prevUntil 메서드   | $(Selector).prevUntil()       |
      | siblings 메서드  | $(Selector).siblings()      |
      
      - 실습 코드
      
      ```html
      	<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>Selector</title>
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		</head>
		<body>
		
		<div id="root_wrap" style="position: relative">
		    <div id="root">
		        <p id="first">P tag : 1 #first</p>
		        <p>P tag : 2</p>
		        <p id="target"><a href="#"><b>P tag : 3 #target</b></a> </p>
		        <p>P tag : 4</p>
		        <p><b>P tag : 5</b></p>
		        <p id="last">P tag : 6 #last</p>
		    </div>
		</div>
		
		<script>
		    function resultSelector( selector, lineColor){
		        if( !lineColor ) lineColor = "red";
		        selector.css({ outline : "3px solid " + lineColor});
		    }
		</script>
		</body>
		</html>
      ```


      	- children Method

      해당 셀렉터 기준으로 한 단계 아래의 자식 엘리먼트를 탐색합니다.
      
      	- closest Method

      해당 셀렉터 기준으로 상위로 지정하는 부분의 단계까지 탐색합니다.

      	- find Method

      해당 셀렉터 기준으로 하위로 지정한 부분을 탐색합니다.

      	- next Method

      해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 다음에 해당하는 것을 탐색합니다.

      	- nextAll Method

      해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 다음에 해당하는 것을 한 개 이상 탐색합니다.

      	- nextUntil Method

      해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 다음에 해당하는 것을 한 개 이상 탐색합니다.

      	- offsetParent Method

      해당 셀렉터 기준으로 상위 단계의 엘리먼트 중에 위치한 즉,
      css 의 속성 중 포지션 속성을 지정한 것을 탐색합니다.

      	- parent Method

      해당 셀렉터 기준으로 바로 한 단계 상위의 엘리먼트를 탐색합니다.
      
      	- parents Method

      해당 셀렉터 기준으로 상위의 엘리먼트를 한 개 이상 탐색합니다.
      
      	- parentsUntil Method

      해당 셀렉터 기준으로 지정한 부분의 바로 전 단계의 상위 엘리먼트를 한 개 이상 탐색합니다.
      단, 뒤에 인자로 지정한 셀렉터는 선택에서 제외합니다.
      
      	- prev Method

      해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 이전에 해당하는 것을 탐색합니다.
      
      	- prevAll Method

      해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 이전에 해당하는 것을 한 개 이상 탐색합니다.
      
      	- prevUntil Method

      해당 셀렉터 기준으로 같은 단계의 엘리먼트 중 이전에 해당하는 것을 한 개 이상 탐색합니다.
      단, 앞서 살펴본 .prevAll() 메서드와 기능이 유사하나 .prevUntil() 메서드에 지정한
      셀렉터의 바로 전 까지가 이에 해당합니다.
      
      	- siblings Method

      해당 셀렉터를 제외한 같은 단계의 엘리먼트를 탐색합니다.

      -----
      

      - 그 외(Miscellaneous) 탐색 메서드

      | 구분        | 메서드 작성 코드       |
      | --------- | --------------- |
      | add 메서드    | $(Selector).add() |
      | addBack 메서드    | $(Selector).addBack() |
      | contents 메서드    | $(Selector).contents() |
      | end 메서드 | $(Selector).end()     |

      	- add Method

      셀렉터를 추가적으로 지정하기 위해 사용합니다. 
            
      	- addBack Method

      결과물을 반환하는 제이쿼리 객체는 항상 바로 상위에 객체(prevObject) 를 함께 저장해 놓고 있는데, 이를 참고하여 탐색 후에 해당 셀렉터와 함께 추가적으로 상위 엘리먼트를 선택합니다.

      	- contents Method

      해당 셀렉터를 기준으로 한 단계 아래의 자식을 탐색하는 children(0 메서드와 기능이 유사하지만 텍스트 노드까지 포함합니다.

      	- end Method

  뿌리 엘리먼트에 해당하는 것을 찾아갑니다. 즉, 최초에 셀렉터를 작성해 얻어낸 결과물인 제이쿼리 객체, $(Selector) 를 탐색합니다.

  -----

      - 필터(Filter) 메서드

      | 구분        | 메서드 작성 코드       |
      | --------- | --------------- |
      | filter 메서드    | $(Selector).filter() |
      | eq 메서드    | $(Selector).eq() |
      | first 메서드    | $(Selector).first() |
      | last 메서드 | $(Selector).last()     |
      | slice 메서드  | $(Selector).slice()      |
      | map 메서드  | $(Selector).map()      |
      | has 메서드   | $(Selector).has()       |
      | is 메서드  | $(Selector).is()      |
      | not 메서드   | $(Selector).not()       |
      
      - 실습 코드
      
      ```html
      	<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>Selector</title>
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		</head>
		<body>
		
		<div id="root_wrap" style="position: relative">
		    <div id="root">
		        <p id="first">P tag : 1 #first</p>
		        <p>P tag : 2</p>
		        <p id="target"><a href="#"><b>P tag : 3 #target</b></a> </p>
		        <p>P tag : 4</p>
		        <p><b>P tag : 5</b></p>
		        <p id="last">P tag : 6 #last</p>
		    </div>
		</div>
		
		<div id="result" style="display: none; margin-top: 100px">
		    <div class="text" style="display: none;">
		        <p><strong>* Text 결과값</strong></p>
		        <p class="description"></p>
		    </div>
		    <div class="boolean" style="display: none;">
		        <p><strong>* Boolean 결과값</strong></p>
		        <div class="true" style="color:#fff;background: blue">TRUE</div>
		        <div class="false" style="color:#fff;background: red">FALSE</div>
		    </div>
		</div>
		
		<script>
		    function resultSelector( selector, lineColor){
		        if( !lineColor ) lineColor = "red";
		        selector.css({ outline : "3px solid " + lineColor});
		    }
		</script>
		</body>
		</html>
      ```


      	- filter Method

      해당 셀렉터를 조금 더 상세하게 탐색합니다. filter() 메서드의 인자를 다음과 같이
      설정할 수 있고 필터링한 값을 불린(boolean) 값 중, true 이거나 이에 해당하는 엘리먼트를
      결과로 반환합니다.
      
      	- eq Method

      해당 셀렉터를 조금 더 세부적으로 판단하여 선택할 수 있도록 순서('index')를 정의합니다. 
      순번은 0을 기초로 하며 정수를 지정할 수 있습니다. 
      셀렉터 표현식, $(":eq()") 표현식과 같은 결과를 보여줍니다.

      	- first Method

      해당 셀렉터의 첫 번째 순번을 판단하여 선택합니다. 셀렉터 표현식
      $(":eq(0)"), $(":lt(1)"), $(":first-child") 표현식과 같은 결과를 보여줍니다.

      	- last Method

      해당 셀렉터의 마지막 번째 순번을 판단하여 선택합니다. 셀렉터 표현식
      $(":eq(-1)"), $(":gt(-2)"), $(":last-child") 표현식과 같은 결과를 보여줍니다.

      	- slice Method

      eq() 메서드는 하나의 값만 지정할 수 있었지만, slice() 메서드는 시작과 끝의 순번을
      지정하여 이 범위에 해당하는 엘리먼트를 판단할 수 있습니다. 순번('index')은 0을 기초로 하며
      정수로 지정할 수 있습니다. 마지막 순번은 옵션으로 설정할 수 있는데, 
      만약 값을 생략하면 자동적으로 끝 순번의 값으로 지정됩니다.

      	- map Method

      map 메서드는 앞서 살펴본 filter() 메서드와 기능이 유사하다고 볼 수 있지만 
      메서드를 정의한 개념이 조금 다릅니다. filter() 메서드는 일치하는 해당 엘리먼트만 
      반환 시키지만, map() 메서드는 가공을 거쳐서 결과값을 다른 객체로 옮겨 담을 수도 있습니다.
      이는 분명히 다른 개념이기 때문에 구현 요구 사항에 맞춰 사용을 다르게 하는 것이 좋습니다.

      	- has Method

      인자로 지정한 설렉터를 자손 엘리먼트로 가지고 있는지 판단합니다.

      	- is Method

      인자로 지정한 셀렉터가 존재하는지 판단합니다. 메서드를 사용할 때 결과값을 
      불린(Boolean, true/false) 타입으로 넘겨준다는 점을 주의해야 합니다.
      
      	- not Method

      인자로 지정한 셀렉터와 일치하지 않을 엘리먼트를 판단합니다.
      
      
      
      

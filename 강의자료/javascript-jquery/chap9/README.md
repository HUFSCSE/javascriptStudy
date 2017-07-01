
# Chapter 09. DOM(Document Object Model)

* 문서객체모델 이라고 하며 document객체를 의미한다.
* HTML요소(Element)를 제어하기 위해 사용된다.
* 처음엔 어렵다!!
* DOM 을 쉽게 제어하기위해 만들어진것이 제이쿼리 이다

```html
<!DOCTYPE HTML>
<!DOCTYPE HTML>
<html lang ="ko">
<head>
	<meta charset = "UTF-8">
	<title>DOM</title>
</head>
<body>
<h1>HTML DOM의 구조</h1>
<p>node알아보기</p>
</body>
</html>
```

그림 1-10 참고

* HTML 요소들을 노드와 노드로 연결된 트리구조로 만들어준다.
* 태그를 '요소노드' 라고 하고, 텍스트를 '텍스트 노드'라고 한다.

## 09-1 요소의 선택

### 1. 요소를 직접 선택하는 방법

```
* getElementById() : id 속성값으로 요소를 선택한다.
* getElementByClassName() : class 명으로 요소를 선택한다.
* getElementByTagName() : 태그명으로 요소를 선택한다.
* getElementByName() : name 명으로 요소를 선택한다.
```

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>HTML 요소를 직접 선택하는 메서드들</title>
	<script>
		window.onload = function(){
			var result = "";
			var content = document.getElementById("content");
			var menu = document.getElementsByClassName("menu");
			var ul = document.getElementsByTagName("ul");
			var txt = document.getElementsByName("txt");
			result += content + "\n";
			result += menu + "\n";
			result += ul + "\n";
			result += txt;
			alert(result);			
		}
	</script>
</head>
<body>
	<div id="content">
		<ul class="menu">
			<li>내용1</li>
			<li>내용2</li>
		</ul>
		<ul class="menu">
			<li>내용1</li>
			<li>내용2</li>
		</ul>
		<ul>
			<li>내용1</li>
			<li>내용2</li>
		</ul>
		<input type="text" name="txt" value="자바스크립트" />
		<input type="text" name="txt" value="제이쿼리" />
	</div>
</body>
</html>
```

```
ul은 복수개의 요소들이 저장된다..->배열로 저장됨
ul.item(0) -> ul요소들중 첫번째 ul요소를 선택한다.
ul[1] -> 두번째 요소
ul.length -> 개수 : 3개
```

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>문서 객체를 직접 선택하는 메서드들</title>
	<script>
		window.onload = function(){
			var result = "";			
			var txt = document.getElementsByName("txt");		
			result += txt.item(0).value + "\n";
			result += txt.item(1).value + "\n";
			result += txt[0].value + "\n";
			result += txt[1].value + "\n";
			result += txt.length;
			alert(result);			
		}
	</script>
</head>
<body>
	<input type="text" name="txt" value="자바스크립트" />
	<input type="text" name="txt" value="제이쿼리" />	
</body>
</html>
```
* value : 속성값

### 2. 상대 위치로 선택하는 방법

* parentNode      : 현재 선택된 요소의 부모노드 선택
* childNodes      : 현재 선택된 요소의 자식 노드들(요소,텍스트 노드) 선택
* childredn	      : 현재 선택된 요소의 자식 노드들(요소노드) 선택
* nextSibling     : 현재 선택된 요소의 이전 형제 노드 선택
* previousSibling : 현재 선택된 요소의 다음 형제 노드 선택
* firstChild	  : 현재 선택된 요소의 자식노드중 첫번재 노드 선택
* lastChild       : 현재 선택된 요소의 자식노드중 마지막 노드 선택
* tagName		  : 현재 선택된 요소의 태그명 반환
* nodeValue		  : 현재 선택된 노드의 value값 반환
* nodeType		  : 현재 선택된 노드의 타입 반환
* id			  : 현재 선택된 요소의 id값 반환
* className	      : 현재 선택된 요소의 class값 반환

**childNodes, children 속성은 비슷하지만 다르다**

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>문서 객체를 상대위치에서 선택하는 속성들</title>
	<script>
		window.onload = function(){
			var gnb = document.getElementById("gnb");
			var gnbA = gnb.getElementsByTagName("a");
			var result = gnbA[0].parentNode.parentNode.id + "\n";
			result += gnbA[0].parentNode.nextSibling.nextSibling.firstChild + "\n";
			result += gnb.lastChild.previousSibling.className;
			alert(result);
			gnbA[0].onclick = function(){
				this.parentNode.style.backgroundColor = "red";
				return false;
			}

		}
	</script>
</head>
<body>
	<div>		
		<ul id="gnb">
			<li><a href="#a">메뉴1</a></li>
			<li><a href="#b">메뉴2</a></li>
			<li class="last"><a href="#c">메뉴3</a></li>
		</ul>				
	</div>
</body>
</html>
```

```
결과 : 7/3
```

childNodes는 텍스트 요소까지 다 가져온다. ul 이하로 엔터4번 + li태그 3개 = 7개
배열로 받기때문에 다음과같이 사용이 가능하다
```javascript
gndChilds[0]~gndChilds[6]
```

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>nodeType</title>
	<script>
		window.onload = function(){
			var gnb = document.getElementById("gnb");
			var gnbChilds = gnb.childNodes;	
			var child = new Array();
			var count = 0;
			for(var i=0;i<gnbChilds.length;i++){				
				if(gnbChilds[i].nodeType == 1){
					child[count] = gnbChilds[i];
					alert(child[count].tagName);
					count++;					
				}				
			}			
			alert(child.length);
			
			/*for(var i in gnbChilds){
				alert(gnbChilds[i]);
			}*/
		}
	</script>
</head>
<body>
	<div>		
		<ul id="gnb">
			<li><a href="#">메뉴1</a></li>
			<li><a href="#">메뉴2</a></li>
			<li><a href="#">메뉴3</a></li>
		</ul>				
	</div>
</body>
</html>
```

nodetype == 1 -> 현재노드가 '요소노드'

## 09-2 요소의 생성 및 삭제

### 1. 요소의 생성

* createElement()  : 요소 생성
* createTextNode() : 텍스트노드 생성
* appendChild()	   : 자식요소로 생성

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>요소 생성</title>	
	<script>
		window.onload = function(){
			var bt = document.getElementById("bt");
			bt.onclick = createNode;		
			function createNode(){
				var div = document.createElement("div");
				var txt = document.createTextNode("div 요소가 생성 되었습니다!");
				div.appendChild(txt);
				document.body.appendChild(div);	
			}
		}
	</script>
</head>
<body>
	<button id="bt">요소 생성</button>	
</body>
</html>
```

* setAttribute(속성, 값) : 요소의 속성을 설정
* getAttribute(속성)     : 요소의 속성값 반환
* removeAttribute(속성)  : 요소의 속성 제거

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>속성 추가 삭제</title>	
	<script>
		window.onload = function(){
			var bt = document.getElementById("bt");
			var del = document.getElementById("del");			
			function createNode(){
				var div = document.createElement("div");
				var a = document.createElement("a");
				var txt = document.createTextNode("아이콕스");
				a.appendChild(txt);
				a.setAttribute("href","http://icoxpublish.com");
				a.setAttribute("target","_blank");
				a.setAttribute("title","새창");
				div.appendChild(a);
				document.body.appendChild(div);	
			}
			bt.onclick = createNode;	
			del.onclick = function(){
				var divs = document.getElementsByTagName("div");
				divs.item(0).firstChild.removeAttribute("title");
				//divs[0].firstChild.removeAttribute("title");
			}
		}
	</script>
</head>
<body>
	<button id="bt">요소 생성</button><button id="del">속성 제거</button>
</body>
</html>
```

```
target 종류
1. _blank : 링크된 내용이 새창으로 보여진다.
2. _self : 현재 창에 링크된 내용이 보여진다.
3. _parent :부모창에 링크된 내용이 보여진다. 현재 창의 바로 전창에 링크된 내용이 보여진다.
4. _top : 현재 열려있는 최상위 인터넷 창에 내용이 보여진다.
```

* innerHTML : 문자 방식으로 요소 생성

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>innerHTML</title>	
	<script>
		window.onload = function(){
			var bt = document.getElementById("bt");
			var content = document.getElementById("content");
			bt.onclick = createNode;		
			function createNode(){				
				content.innerHTML = "<a href='http://icoxpublish.com' target='_blank' title='새창'>아이콕스</a>";	
			}
		}
	</script>
</head>
<body>
	<button id="bt">요소 생성</button>
	<div id="content"></div>
</body>
</html>
```

* removeChild() : 자식제거

### 09-3 Javascript의 스타일 적용

#### 자바스크립트 스타일 형식
```
요쇼.style.속성 = "속성값"
```

color -> color
background-color -> backgroundColor
border-bottom-width -> boardBottomWidth

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>요소 제거</title>	
	<script>
		window.onload = function(){
			var bt = document.getElementById("bt");
			var content = document.getElementById("content");
			bt.onclick = function(){
				content.removeChild(content.firstChild);
			}
		}
	</script>
</head>
<body>
	<button id="bt">요소 제거</button>
	<div id="content"><a href='http://icoxpublish.com' target='_blank' title='새창'>아이콕스</a></div>
</body>
</html>
```

### 09-4 Form 객체
document 객체의 하위 객체 중에 하나. 

#### 1. form 객체의 선택
```
document.폼요소.요소.속성
```
#### 2. form 객체의 속성
| 속성 및 메서드  | 설명 |
| :------------: | :----------- |
| value     | input, textarea 요소의 value값을 반환 |
| checked    | checkbox나 radio가 check 유무를 반환 |
| disabled     | 요소의 활성화 상태를 반환 |
| defaultValue     | 초기 설정값을 반환 |
|length|요소의 개수 반환|
|focus()|요소에 포커스를 맞춤|
|blur()|요소에서 포커스를 없애줌|
|submit|form 요소 값 전송|
|reset()|form 요소 값 초기화|

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>form 객체</title>	
	<script>
		function check(){
			var frm = document.frm;
			if(!frm.product.value){
				alert("상품명을 입력하세요!");
				frm.product.focus();
				return false;
			}			
		}
	</script>
</head>
<body>	
	<form action="#" name="frm" onsubmit="return check()">		
		<label for="product">상품입력</label><input type="text" name="product" id="product" />			
		<input type="submit" value="검색" />		
	</form>
</body>
</html>                                
```

** 폼이 여러개일때? **

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>form 객체 선택</title>
    <script>
        function check1(){              
            var idValue = document.forms[0].elements[0].value;
            //var idValue1 = document.forms[0][0].value;                      
            alert(idValue);                       
            return false;
        }
		function check2(){           
            var idValue = document.forms["fm2"].elements["query"].value;
            //var idValue2 = document.forms["fm2"]["query"].value;            
            alert(idValue);                       
            return false;
        }
    </script>
</head>
<body>
    <form action="#" name="fm1" onsubmit="return check1()">
        <input type="text" name="subject" title="과목 입력" /><input type="submit" value="전송" />
    </form>
    <form action="#" name="fm2" onsubmit="return check2()">
        <input type="text" name="query" title="검색어 입력" /><input type="submit" value="전송" />
    </form>    
</body>
</html> 
```

* 폼 속성 이용

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>form 객체 속성</title>
    <script>
		function check(){
			var frm = document.frm;            
			if(!frm.agree1.checked){
				alert("약관에 동의하세요!");
				frm.agree1.focus();
				return;
			}
			if(!frm.agree2.checked){
				alert("개인정보에 동의하세요!");
				frm.agree2.focus();
				return;
			}
			location.href = "http://icoxpublish.com";			
		}
		function allCheck(){            
			with(document.frm){
				if(all.checked){
					for(var i=0;i<length;i++){
						if(elements[i].type == "checkbox"){
							elements[i].checked = true;
						}
					}
				}else{
					for(var i=0;i<length;i++){
						if(elements[i].type == "checkbox"){
							elements[i].checked = false;
						}
					}
				}
			}
		}
    </script>
</head>
<body>
    <form action="#" name="frm">
        <div><input type="checkbox" name="all" id="all" onclick="allCheck()" /><label for="all">전체동의</label> </div>    
        <div><textarea cols="30" rows="10">약관동의</textarea></div>
        <p><input type="checkbox" name="agree1" id="agree1" /><label for="agree1">약관동의</label></p>
        <div><textarea cols="30" rows="10">개인정보</textarea></div>
        <p><input type="checkbox" name="agree2" id="agree2" /><label for="agree2">개인정보동의</label></p>
        <p><input type="button" value="동의" onclick="check()" /><input type="reset" value="취소" /></p>
    </form>    
</body>
</html>
```

#### 3 select요소와 option요소

##### 1. option 요소 선택
```javascript
* document.form요소.select요소.options[index]
* document.form요소.select요소.selectedIndex
```

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>select option선택</title>
    <script>
		function siteLink(){
			var frm = document.frm;
			var linkValue = frm.site.options[frm.site.selectedIndex].value;
			if(linkValue){
				window.open(linkValue,"_blank");
			} 
		}
    </script>
</head>
<body>
	<form name="frm">
		<select name="site">
			<option value="">출판사</option>
			<option value="http://icoxpublish.com">아이콕스</option>
		</select>
		<input type="button" value="확인" onclick="siteLink()" />
	</form>
</body>
</html>
```

##### 2. option요소 추가 및 삭제
```javascript
* document.form요소.select요소.add(...)
```

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>select option 추가 및 삭제</title>
    <script>
		window.onload = function(){
			var frm = document.frm;
			frm.subject.add(new Option("제이쿼리","jQuery"));
			frm.job.length = 2;
		}
    </script>
</head>
<body>
	<form name="frm">
		<select name="subject">
			<option value="">과목선택</option>
			<option value="javascript">자바스크립트</option>
		</select>
		<select name="job">
			<option value="">직업선택</option>
			<option value="javascript">학생</option>
			<option value="javascript">회사원</option>
		</select>
	</form>
</body>
</html>
```

#### 4. form 객체에서의 this 사용

```html
<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>form 객체 this</title>
<script>
	function view(f){
		alert(f);
	}
</script>
</head>
<body>
<form name="frm1">	
	<input type="button" value="확인" onclick="javascript:view(this.value)"/>
</form>
<form name="frm2">	
	<input type="button" value="form 확인" onclick="javascript:view(this.form.name)"/>
</form>
</body>
</html>
```

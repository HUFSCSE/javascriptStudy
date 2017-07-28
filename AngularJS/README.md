# Angular JS 

구글에서 만든 SPA(Single Page App)을 만들 때 반복되는 코드와 복잡한 코드를 줄이고 테스트를 쉽게 하도록 하기위해 만든 JavaScript MVC Framework. -2009년 발표

### 특징

* 자바스크립트로 작성할 코드량을 줄여준다. Dom을 선택하고 조작하는 자바스크립트 코드를 작성하지 않아도 된다.
* 양방향 데이터 바인딩이 가능. 모델의 데이터와 뷰 데이터가 양방향 데이터 바인딩이 되어, 모델이 바뀌면 뷰 데이터도 같이 변경 됨
* HTML, CSS, 로직 등의 개발 영역을 명확하게 분리해줌. 기존 자바스크립트에서는 Dom 조작과 이벤트 처리를 위해 HTML을 잘 알고 있어야 했으나, AngularJS는 뷰 코드와 로직 코드가 명확히 분리됨

### 주요개념
#### Model(모델)
* 단순 자바스크립트 객체로 된 데이터
* 보통 JSON으로 표현되는 애플리케이션의 특정한 데이터 구조를 말합니다.
* json 데이터를 jQuery의 $.ajax 메서드를 래핑한 Angular의 $http 를 통해 XHR(XMLHttp Request)로 서버에서 가져오거나 페이지를 로딩할 때 코드에서 직접 (데이터베이스에서) 읽어오도록 할 수 있다. 그리고 모델을 변경한 다음 다시 반영할 수도 있습니다.

#### View(뷰)
* 템플릿과 모델이 합쳐져서 보여지는 화면 (Dom구조로 되어있습니다.)
* MVC 프레임워크를 사용한다면 뷰를 갱신할 모델 데이터를 내려받은 뒤 HTML에서 해당 데이터를 보여줄 것이다.

#### Controller(컨트롤러)
* 자바스크립트로된 로직 영역
* 컨트롤러는 서버에서 직접 뷰로 접근하는 일종의 중간 통로로서 필요할 때마다 서버와 클라이언트 통신으로 데이터를 변경한다.

#### Scope(스코프)
- 뷰와 컨트롤러 사이에서 데이터를 연결해주는 역할
- 모델과 뷰를 감시하고, 컨트롤러에 이벤트를 보내는 역할

#### Directive(디렉티브)
* html을 확장하는 AngularJS의 지시어
* ex) ng-app, ng-controller, ng-click 등..

#### Data Binding(데이터바인딩)
* 모델과 뷰의 데이터를 실시간으로 연동

#### Module(모듈)
* 모든 자바스크립트 기능들이 ng-app="모듈명" 을 시작으로 모듈 단위로 관리됩니다.
* 컨트롤러, 서비스, 필터 등을 포함하며, 응용프로그램의 서로 다른 기능을 구성하는 컨테이너 입니다.

#### Service(서비스)
* 특정 기능을 담당하는 객체
* 싱글톤 객체로 인스턴스가 하나만 존재합니다.

### 초간단예제
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<!-- Angular JS의 Controller 역할을 하는 코드 -->
<script src="./myCtrl.js"></script>
<title>Insert title here</title>
</head>
<body ng-app="myApp" ng-controller="myCtrl">
	<h1>board.html</h1>
	<table border="1">
		<thead>
			<tr>
				<th ng-click="arrange('id')">ID</th>
				<th ng-click="arrange('title')">TITLE</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="board in list | orderBy:orderKey">
				<td>{{board.id }}</td>
				<td>{{board.title }}</td>
			</tr>
		</tbody>
	</table>
</body>
</html>
```

```javascript
	// controller와 myApp을 동기화 시킵니다

	//angular 컨텍스트(=영역)를 만들건데 myApp라는 페이지를 가져와서 만들겁니다.
	//이 코드로 인해 myApp 전부가 제어 아래 들어옵니다.
	var app = angular.module('myApp',[]);
 
 	
 	//app안에 controller를 만듭니다
 	//첫번째 매개변수로 만들어질 컨트롤러 이름이 들어옵니다
 	//두번째 매개변수로 컨트롤러가 할 일을 넣습니다
 	//function안에는 scope와 http라는 객체가 들어갑니다 (service) ==> service 로직이 있는 장소를 service라고 합니다. 
 	//scope: '전역'공간 개념의 객체. --> 생성한 변수를 글로벌한 영역에서 쓸 수 있도록 하려고 scope라는 공간을 사용함
 	//http: 'ajax' 메서드를 가지고 있는 객체.
 	app.controller('myCtrl', function($scope, $http){
 		//scope안에 함수와 변수를 만듭니다
 		$scope.arrange = function(x){
 			$scope.orderKey = x;
 		};
 		
 		$http({
 			method:'GET',
 			url:'/list',
 		}).then(function(response){
 			console.log('성공');
 			$scope.list = response.data;
 		});
 		
 	});
```

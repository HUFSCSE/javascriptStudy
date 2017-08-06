#React Js

> React JS?

React는 페이스북에서 개발한 유저인터페이스 라이브러리로서 개발자로 하여금 재사용 가능한 UI를 생성 할 수 있게 해줍니다. 이 라이브러리는 현재 페이스북, 인스타그램, 야후, 넷플릭스를 포함한 많은 큰 서비스에서 사용되고 있습니다.

이 라이브러리는 Virtual DOM 이라는 개념을 사용하여 **상태의 변함에 따라 선택적으로 유저인터페이스를 렌더링** 합니다.
따라서, 최소한의 DOM 처리로 컴포넌트들을 업데이트 할 수 있게 해줍니다.

---

> Virtual DOM 은 어떻게 작동하지?

**DOM 이해하기**

우선 DOM 이 뭔지 제대로 짚고 넘어갑시다. DOM 은 Document Object Model 의 약자입니다. 이는 객체를 통하여 구조화된 문서를 표현하는 방법이며, XML 혹은 HTML 로 작성됩니다. 웹 브라우저는 이 DOM 을 활용하여 객체에 JavaScript 와 CSS 를 적용하지요. DOM 은 트리 형태로 되어있어서, 특정 node 를 찾을 수도 있고, 수정 할 수도 있고, 제거하거나 원하는 곳에 삽입 할 수도 있습니다.

**DOM 의 문제점**

요즘의 DOM API 는 수많은 플랫폼, 그리고 수많은 브라우저에서 사용되고 있는데, 이 DOM 에는 치명적인 문제점이 하나 있습니다. 그것은 바로, 동적 UI 에 최적화되어 있지 않다는 것 있습니다. HTML 은 자체적으로는 정적이잖아요. 그렇죠? 물론, 이는 자바스크립트나 jQuery 를 사용하여 손을 볼 수 있습니다.

하지만, 요즘의 큰 규모의 웹 어플리케이션, 예를 들어 트위터나 페이스북을 생각해보세요. 스크롤을 좀 내리다 보면, 정말 수많은 데이터가 로딩됩니다. 그리고 각 데이터를 표현하는 요소(element)들이 있겠죠. 그 요소들의 개수가 몇백 개, 몇천 개 단위로 많아진다면 (예: 페이스북에서 포스트 한 개를 표현 할 때 사용되는 요소의 개수는 약 100개 입니다) 이야기가 좀 달라집니다. 이렇게 규모가 큰 웹 어플리케이션에서 DOM 에 직접 접근하여 변화를 주다 보면, 성능상의 이슈가 조금씩 발생하기 시작합니다. 좀 느려진다는 건데요, 일부 문서에서는 이를 두고 요즘의 자바스크립트 엔진은 매우 빠른 반면, DOM 은 느리다 라고 하는데, 이것은 정확한 사실이 아닙니다.

DOM 자체는 빠릅니다. DOM 자체를 읽고 쓸 때의 성능은 자바스크립트 객체를 처리 할 때의 성능과 비교해서 다를 게 없습니다. **단, 브라우저 단에서 DOM 의 변화가 일어나면, 브라우저가 CSS 를 다시 연산하고, 레이아웃을 구성하고, 웹 페이지를 리페인트 하는데, 이 과정에서 시간이 허비되는 것 이랍니다.**

여기서 레이아웃을 새로 구성하면서 계산하는것을 `reflow` 라고하고, 색상변경과 같은 레이아웃에 관계없는 것들읃 처리하는건 `repaint` 라고 합니다.

한번 예제를 볼까요?

```javascript
var style = document.body.style; // 캐싱

style.padding = "20px"; // reflow, repaint
style.border = "10px solid red"; // reflow, repaint

style.color = "blue"; // repaint (레이아웃이 변경되진 않았기 때문에 reflow 안함)
style.backgroundColor = "#ffa"; // repaint

style.fontSize = "1em"; // reflow, repaint

// reflow, repaint
document.body.appendChild(document.createTextNode('hello world!'));
````

이 외에도, 변경하지 않고 DOM 의 값을 읽을떄도 reflow가 계산 될 때가 있습니다.

`element.offsetLeft`, `element.clientWidth`, `element.getClientRects()` 이런 코드가 실행 될 떄도 reflow가 실행 된답니다.

**브라우저는 바보가 아니다**

브라우저 개발팀들은 언제나 최적의 경험을 사용자에게 제공해주기위해서 노력을 하고 있습니다. 저렇게 코드가 실행될때마다 비효율적으로 그때그때 reflow를 한다면 정말 성능이 저하되겠죠. 그래서 브라우저는 이 성능저하를 단축시키기 위하여 이렇게 매우 짧은시간내에 여러 reflow 가 발생하려고 할 시, 이 작업을 미루고 한꺼번에 처리합니다.

하지만, 일부 코드들은 브라우저에서 최적화를 하지 못할때도 있는데요, 예를들어 offsetTop, scrollTop, getComputedStyle() 등의 코드가 실행 될 때는 현재의 값을 가져오는것들이 중요하기 때문에 reflow가 여러번 발생할수밖에 없게 됩니다.

그렇기 때문에, 성능 개선을 위해서는 reflow 횟수를 줄이기 위하여 코드를 최적화 해야합니다.

**해결법**

HTML 마크업을 시각적인 형태로 변환을 하는 것은 브라우저의 주 역할이기 때문에, 이를 처리 할 때 컴퓨터 자원이 사용되는 것은 어쩔 수 없습니다. 결국엔, 이 문제를 해결하기 위해서 DOM 조작을 아예 안 할 수는 없으니까, 적어도 **최소한의 DOM 조작을 통하여 우리의 작업을 처리하는 방식으로 이를 개선 할 수는 있습니다.**

만약에 DOM 작업을 가상화 하여 미리 처리한다음에 한꺼번에 적용할 수 있는방법이 있다면 어떨까요?


**Virtual DOM**

Virtual DOM 을 사용하면, 실제 DOM 에 접근하여 조작하는 대신에, 이를 추상화 시킨 자바스크립트 객체를 구성하여 사용합니다. 이는 마치 실제 DOM 의 가벼운 사본과도 비슷하죠.

React 에서 데이터가 변하여 브라우저상의 실제 DOM 을 업데이트 할 때에는 다음과 같이 3가지 절차를 밟습니다:
1. 데이터가 업데이트되면, 전체 UI 를 Virtual DOM 에 리렌더링 합니다.
2. 이전 Virtual DOM 에 있던 내용과 현재의 내용을 비교합니다.
3. 바뀐 부분만 실제 DOM 에 적용이 됩니다.

결국에는 컴포넌트가 업데이트 될 때, 레이아웃 계산이 한번만 이뤄집니다.


**오해**

Virtual DOM을 사용한다고 해서, 사용하지 않았을 때와 비해 무조건 빠른 것은 아닙니다.
React 매뉴얼에 따르면, 다음과 같은 문장이 있습니다:
```
"우리는 다음 문제를 해결하기 위해 React를 만들었습니다:
지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기."
```

예, 그렇습니다. 결국엔 적절한 곳에 사용해야 React 가 비로소 지니고 있는 진가를 발휘하게 됩니다. React 를 사용하지 않아도 코드 최적화를 열심히 하면 DOM 작업이 느려지는 문제를 개선 할 수 있고, 또 매우 간단한 작업의 경우엔 (예: 단순 라우팅 정도만 있는 정적인 웹페이지) 오히려 React 를 사용하지 않는 편이 더 나은 성능을 보이기도 합니다.

반면에, React 와 Virtual DOM 이 우리에게 언제나 제공해 줄 수 있는 것은 바로 업데이트 처리에 대한 간결함입니다. UI 를 업데이트하는 과정에서 생기는 복잡함을 모두 해소해주고, 업데이트에 더욱 쉽게 접근 할 수 있게 해줍니다.

---
>특징

Virtual DOM 을 사용합니다
JSX: JSX 는 JavaScript 의 확장 문법입니다. DOM 엘리먼트들을 만들 때 JavaScript 형식으로 작성해야 하는 것을, XML 과 비슷한 형태로 작성할 수 있게 해줍니다. 이를 사용하는것은 권장사항이고 필수는 아닙니다. 하지만 사용하지 않으면 좀 불편합니다.
Components React는 모두 Component 에 대한 것 입니다. React 개발을 할 때는 모든 것을 Component 로서 생각해야 합니다.

>장점

Virtual DOM 을 사용한 어플리케이션의 성능 향상
클라이언트에서도 렌더링 될 수 있고, 서버측에서도 렌더링 될 수 있음 (이를 통해 브라우저측의 초기 렌더링 딜레이를 줄이고, SEO 호환도 가능해집니다)
Component 의 가독성이 매우 높고 간단하여 쉬운 유지보수가 가능해집니다.
프레임워크가 아닌 라이브러리서 다른 프레임워크들과 사용이 가능합니다. React 에선 UI만 신경쓰고, 빠져있는 부분은 본인이 좋아하는 라이브러리를 사용하여 stack 을 본인의 입맛대로 설정 할 수 있음

>제한

어플리케이션의 View 레이어만 다루므로 이 외의 부분은 다른 기술을 사용해야 합니다 (예를 들어 Ajax, Router 등의 기능은 직접 구현하거나 다른 모듈을 설치하여 사용합니다. 하지만 그 과정이 그렇게 복잡하지 않습니다.
React 버전 v15부터 IE8 이하 버전을 지원하지 않습니다. (IE8 이하 버전을 지원해야 할 경우 v0.14 버전을 사용 해야 합니다.



> 소스 기본
  1. 구조

  **index.html**
  ```html
  <!DOCTYPE html>
  <html>

     <head>
        <meta charset="UTF-8">
        <title>React App</title>
     </head>

     <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
     </body>

  </html>
  ```
  **index.js**

  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './components/App';

  const rootElement = document.getElementById('root');    
  ReactDOM.render(<App />, rootElement);

  ```

  **src/components/App.js**

  ```javascript
  import React from 'react';
  import Header from './Header';
  import Content from './Content';

  class App extends React.Component {
      render(){
          return  (
              <div>
                  <Header/>
                  <Content/>
              </div>
          );
      }
  }
  export default App;
  ```

  **src/components/Header.js**

  ```javascript
  import React from 'react';


  class Header extends React.Component {
      render(){
          return (
              <h1>Header</h1>
          );
      }
  }

  export default Header;

  ```

  **src/components/Conent.js**

  ```javascript
  import React from 'react';


  class Content extends React.Component {
      render(){
          return (
              <div>
                  <h2>Content</h2>
                  <p> Hey! </p>
              </div>
          );
      }
  }

  export default Content;
  ```



  2. props

  props 는 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용됩니다. parent 컴포넌트에서 child 컴포넌트로 데이터를 전할 때, props 가 사용됩니다. 예제를 통하여 이에 대하여 알아보겠습니다.

  2.1 props 추가하기

  컴포넌트에서 immutable (변하지 않는)  데이터가 필요 할 땐,
  render() 메소드의 내부에 안에 { this.props.propsName } 형식으로 넣고,
  컴포넌트를 사용 할 때, < > 괄호 안에 propsName="value" 를 넣어 값을 설정합니다.

  Header 컴포넌트와 Content 컴포넌트가 props를 사용하도록 업데이트 해보겠습니다.

  **Header.js**

  ```javascript
  import React from 'react';


  class Header extends React.Component {
      render(){
          return (
              <h1>{ this.props.title }</h1>
          );
      }
  }

  export default Header;
  ```

  위와 같이 props 값이 렌더링 될 위치에 { this.props.propsName } 를 넣습니다.

  **Content.js**
  ```javascript
  import React from 'react';


  class Content extends React.Component {
      render(){
          return (
              <div>
                  <h2>{ this.props.title }</h2>
                  <p> { this.props.body } </p>
              </div>
          );
      }
  }

  export default Content;
  ```
  contentTitle 와 contentBody props 를 넣어주었습니다.

  2.2 props 사용하기

  자, 이제 App 컴포넌트에도 props 를 넣어주고, App 컴포넌트에서 사용되는 props 값을 child 컴포넌트들로 전달하겠습니다.

  **App.js**

  ```javascript
  import React from 'react';
  import Header from './Header';
  import Content from './Content';

  class App extends React.Component {
      render(){
          return  (
              <div>
                  <Header title={ this.props.headerTitle }/>
                  <Content title={ this.props.contentTitle }
                            body={ this.props.contentBody }/>
              </div>
          );
      }
  }

  export default App;
  ```

  **index.js**


  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './components/App';

  const rootElement = document.getElementById('root');    
  ReactDOM.render(<App headerTitle = "Welcome!"
                       contentTitle = "Stranger,"
                       contentBody = "Welcome to example app"/>, rootElement);
  ```
  3. State

  컴포넌트에서 유동적인 데이터를 다룰 때, state 를 사용합니다.. React.js 어플리케이션을 만들 땐, state를 사용하는 컴포넌트의 갯수를 최소화 하는 것 을 노력해야합니다. 예를들어, 10 개의 컴포넌트에서 유동적인 데이터를 사용 하게 될 땐, 각 데이터에 state를 사용 할 게 아니라, props 를 사용하고 10 개의 컴포넌트를 포함시키는 container 컴포넌트를 사용하는것이 효율적입니다.

  3.1 기본적인 사용 방법

  StateExample.js

  https://jsfiddle.net/velopert/8ogpnqg6/

  ```javascript
  import React from 'react';

  class StateExample extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
           header: "Header Initial state",
           content: "Content Initial State"
       };
     }

     updateHeader(text){
         this.setState({
             header: "Header has changed"
         });
     }

     render() {
        return (
           <div>
              <h1>{this.state.header}</h1>
              <h2>{this.state.content}</h2>
              <button onClick={this.updateHeader.bind(this)}>Update</button>
           </div>
        );
     }
  }

  export default StateExample;
  ```
  state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.
  state 를 렌더링 할 때는 { this.state.stateName } 을 사용합니다.
  state 를 업데이트 할 때는 this.setState() 메소드를 사용합니다. ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해주어야 합니다. (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없습니다.)

  https://velopert.com/814

http://12bme.tistory.com/140 (렌더링)

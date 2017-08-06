# node.js 소개



1. ### node.js 란 ? 

   - 자바스크립트 엔진 ‘V8’ 위에서 동작하는 이벤트 처리 I/O 프레임워크

   - 서버 환경에서 자바스크립트로 애플리케이션을 작성할 수 있도록 도와준다

   - 웹 클라이언트 기반의 언어인 js 언어를 백엔드 환경에서 사용할 수 있게 됨

     ​

2. ### 특징 / 장점

   - 싱글 스레드 기반이기 때문에 멀티스레드에 따른 문제가 생기지 않음

   - 비동기 방식이기 때문에 자원을 적절히 활용할 수 있다고 함

   - 스크립트 언어를 사용하기 때문에 하나의 언어로 웹서비스를 제작할 수 있음

     ​

3. ### 설치 및 실행

   - 참조 - https://opentutorials.org/course/2136/11852 (생활코딩 - nodejs 설치 및 실행) 

   - 다운로드 - https://nodejs.org/en/download/ (각 운영체제 맞추어 다운)

   - 실행(설치확인) - cmd > node --version

     ​

4. 테스트 웹 서버 구동

   - 참조 - https://opentutorials.org/course/2136/11853 (생활코딩 - 간단한 웹 어플리케이션 만들기)

   - 구동 - node webserver.js

     webserver.js

     ```javascript
     const http = require('http');
      
     const hostname = '127.0.0.1';
     const port = 1337;
      
     http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Hello World\n');
     }).listen(port, hostname, () => {
       console.log(`Server running at http://${hostname}:${port}/`);
     });
     ```

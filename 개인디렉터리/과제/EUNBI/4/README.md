## 프로퍼티에도 함수가 할당 가능하다. 물론 배열에도 할당이 가능하다. 배열에 할당해보세요
```javascript
var array = [];
array[0] = function(){return 200;}
array[1] = function(){return 300;}
array[2] = function(){return 400;}

for(arr in array){
	console.log(array[arr]());
}
```

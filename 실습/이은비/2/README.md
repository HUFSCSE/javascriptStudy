```javascript
<html>
	<script type ="text/javascript">
		console.log("==typeof==");
		var intNum = 10;
		var floatNum = 0.1;
		var singleQuoteStr = 'single quote string';
		var doubleQuoteStr = "double quote string";

		var boolVar = true;
		var emptyVar;
		var nullVar = null;

		console.log(
			typeof intNum,
			typeof floatNum,
			typeof singleQuoteStr,
			typeof doubleQuoteStr,
			typeof boolVar,
			typeof emptyVar,
			typeof nullVar
		);
		console.log("==property==");

		var person = {
        	name: 'EUNBI',
        	age : 27,
        	ocupation : 'developer',
        	getProfile : function () {
            	return "Name : " + this.name
         		+ "\nAge : " + this.age
        		+ "\nOcupation : " + this.ocupation;
        	}
    	};
    	console.log(person.getProfile(null));

    	console.log("==object==");

		var obj = new Object();
		obj.name = "leb";
		obj.age = 27;
		console.log(obj);

		console.log("==literal==");
		var foo = {
			name : "leb",
			age : 27
		}
		console.log(foo);

		console.log("==property delete==");
		delete(foo.name);
		console.log(foo.name);
		delete(foo);
		console.log(foo.age);

		console.log("==객체접근==");
		var f = {
			name:'foo',
			major:'computer science'
		};

		console.log(f.name);
		console.log(f['name']);
		console.log(f[name]);

		f.major = 'elec eng';
		console.log(f.major);
		console.log(f['major']);
		f.age = 40;
		console.log(f.age);

		f['full-name'] = 'foo bar';
		console.log(f['full-name']);
		console.log(f.full-name);
		console.log(name);

		console.log("==for in==");
		var foo2 = {
			name : 'foo',
			age : 30,
			major : 'computer science'
		}

		var prop;
		for(prop in foo2){
			console.log(prop,foo2[prop]);
		}

		console.log("==reference type 특성==");

		var objA = {val:10};
		var objB = objA;
		objB.val = 20;
		console.log(objA.val);
		console.log (objB.val);

		console.log("==객체비교==");
		var a = 100;
		var b = 100;

		var objA = {val:100};
		var objB = {val:100};
		var objC = objB;

		console.log(a==b);
		console.log(objA == objB);
		console.log(objB == objC);

		console.log("callByReference");

		var a = 100;
		var objA = {value:100};

		function changeArg(num,obj){
			num = 200;
			obj.value = 200;

			console.log(num);
			console.log(obj);
		}
		changeArg(a,objA);
		console.log(a);
		console.log(objA);

		console.log("==proto type==");
		var foo3 = {
			name:'foo',
			age:30
		};
		console.log(foo.toString());
		console.dir(foo);

		console.log("==배열 literal==");

		var colorArr = ['orange','yellow','blue','green','red'];
		console.log(colorArr[0]);
		console.log(colorArr[1]);
		console.log(colorArr[4]);

		var emptyArr = [];
		console.log(emptyArr[0]);

		emptyArr[0] = 100;
		emptyArr[4] = 'one';
		emptyArr[100] = '3';
		console.log(emptyArr);
		console.log(emptyArr.length);

		console.log("== 배열 표준 메서드와 length프로퍼티==");

		var arr  = ['zero','one','two'];
		arr.push('three');
		console.log(arr);

		arr.length = 6;
		arr.push('four');
		console.log(arr);

		console.log("==배열=객체?==");

		var colorsArray = ['orange' , 'yellow', 'green'];
 		var colorsObj = {
			'0': 'orange',
			'1': 'yellow',
			'2': 'green'
 		};

 		console.log(colorsArray[0]);
		console.log(colorsObj[0]);

 		console.log(typeof colorsArray);
 		console.log(typeof colorsObj);

 		console.log(colorsArray.length);
 		console.log(colorsObj.length);

 		colorsArray.push('red');
 		//colorsObj.push('red');

 		colorsArray.color = 'blue';
 		colorsArray.name = 'number_array';
 		colorsArray[6] = 'pink';
 		console.log(colorsArray.length);
 		console.dir(colorsArray);

 		for(var prop in colorsArray){
 			console.log(prop, colorsArray[prop]);
 		}

 		for(var i = 0; i < colorsArray.length; i++){
 			console.log(i,colorsArray[i]);
 		}

 		console.log("==배열삭제==");

 		delete colorsArray[2];
 		console.log(colorsArray.length);
 		//colorsArray.splice(2,1);
 		console.log(colorsArray.length);
 		console.dir(colorsArray);
 		colorsArray.splice(1,1,'a');
 		console.dir(colorsArray);

 		console.log("==array생성자 함수==");
 		var foo4 = new Array(3);
 		var foo5 = new Array(1,2,3);

 		console.dir(foo4);
 		console.dir(foo5);

 		console.log("==유사배열객체==");

 		var arr = ['bar'];
 		var _obj = {name : 'foo', length:10};
 		arr.push('baz');
 		console.log(arr);

 		Array.prototype.push.apply(_obj,['baz']);

 		console.dir(_obj);

 		var num = 0.5;
 		console.log(num.toExponential(1));
 		console.log("test".charAt(2));

 	</script>

</html>
```

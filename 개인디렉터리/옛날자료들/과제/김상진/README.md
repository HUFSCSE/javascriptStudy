## 2주차 과제 ##

### 1. call by value와 call by reference의 차이점 ###
call by value(값에 의한 전달): 어떤 함수를 호출할때 전달인자로 변수에 저장되어 있는 값 자체를 전달하는 호출 방법
call by Reference(참조에 의한 전달): 어떤 특정한 데이터 값이 아닌 그 값에 대한 참조값(주소값)에 대한 정보를 전달하는 호출방법
 
    var Value = "value is not change";
    var Reference = {value: "value is change"};
    
    function change(Value, Refernece){
        Value = "value is change";
        Reference.value = "Refernce Value ";

        console.log(Value);
        console.log(Reference.value);
    };
    
    console.log(Value);
    console.log(Reference.value);
    console.log("==================================");
    change(Value, Reference);
    console.log("==================================");
    console.log(Value);
    console.log(Reference.value);
#### 결과값 ####
    value is not change
    value is change
    ==================================
    value is change
    Refernce Value 
    ==================================
    value is not change
    Refernce Value

### 2. 메서드란(Method)란 무엇인가? ###
메서드(Method): 특정 작업을 수행하는 일련의 문장들을 하나로 묶은 것

    var a = 100;
    var b = 200;
    
    function add (num1, num2){
        var result = num1+num2;
        console.log("this is add");
        return result;
    };

    console.log(add(a,b));
    
### 3. 배열에 사용할 수 있는 메서드가 어떤것이 있는지? ###
_length()_

    var emptyArr = [ ];
    console.log(emptyArr[0]);

    emptyArr[0] = 100;
    emptyArr[3] = 'eigth';
    emptyArr[7] = true;
    console.log(emptyArr);
    console.log(emptyArr.length);

_splice(start, deleteCount, item)_

    var arr = ['zero', 'one', 'two', 'three'];
    delete arr [2];
    console.log(arr);
    console.log(arr.length);
    
    console.log("=====================");
    
    arr.splice(2,1);
    console.log(arr);
    console.log(arr.length);


_forEach(item, index, array)_

    var arr = ["test", "array", "forEach"];
    arr.forEach(function (item, index, array) {
    arr[index] = item + "TEST";
    });
    
    for(var i = 0; i<arr.length; i++) {
    console.log(arr[i]);
    }

### 4. 조건문 반복문 정리

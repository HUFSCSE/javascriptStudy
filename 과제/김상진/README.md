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
    value is change // 
    Refernce Value 
    ==================================
    value is not change
    Refernce Value 
    

function Person(name){
  this.name = name;
}

Person.prototype.doSomething = function(callback){
  if(typeof callback == 'function'){
    callback.call(this); //일반 함수 호출
  }
};

function foo(){
  console.log(this.name);
  console.log(this);
}

var p = new Person('pp');
p.doSomething(foo);
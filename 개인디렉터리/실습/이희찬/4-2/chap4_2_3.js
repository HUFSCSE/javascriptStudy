var Person = function(name){
  this.name = name;
  console.log(this);    //Person 객체에 바인딩
}

var me = new Person('me');    //부모함수를 Person으로 둔 새로운 객체 생성
console.log(me.name);
String.prototype.testMethod = function (){
  console.log('this is testMethod');
};

var str = 'this is str';
str.testMethod();

console.dir(String.prototype);
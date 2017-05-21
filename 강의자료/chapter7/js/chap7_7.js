/*7.7*/
function calculate(a,b,c){
	return a*b+c;
}
function curry(func){
	var args = Array.prototype.slice.call(arguments,1);
	console.log("args : " + args);
	return function(){
		console.log("argsFunc : " + args.concat(Array.prototype.slice.call(arguments)));
		return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	}
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2,3)); // 1 x 2 + 3 = 5

var new_func2 = curry(calculate, 1,3);
console.log(new_func2(3)); // 1 x 3 + 3 = 6
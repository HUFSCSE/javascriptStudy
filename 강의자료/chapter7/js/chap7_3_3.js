/*7.3.3*/
var fact = function(){
	var cache = {'0' : 1};
	var func = function(n){
		var result = 0;

		if(typeof(cache[n]) === 'number'){
			console.log('factorial : '+n+', cache : ' + cache[n]);
			result = cache[n];
		}else{
			result = cache[n] = n * func(n-1);
		}
		return result;
	}
	return func;
}();

console.log(fact(3));
console.log(fact(5));
console.log(fact(7));
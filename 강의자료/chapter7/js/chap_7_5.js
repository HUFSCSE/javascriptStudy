/*7.5*/
var cacher = function(cache, func){
	var calculate = function(n){
		if(typeof(cache[n]) === 'number'){
			result = cache[n];
		}else{
			result = cache[n] = func(calculate,n);
		}
		return result;
	}
	return calculate;
};

/*7.6*/
var fact = cacher({'0' : 1}, function(func, n){
	return n * func(n-1);
});

var fibo = cacher({'0' : 0, '1' : 1 }, function(func, n){
	return func(n-1) + func(n-2);
});

console.log(fact(10));
console.log(fibo(10));
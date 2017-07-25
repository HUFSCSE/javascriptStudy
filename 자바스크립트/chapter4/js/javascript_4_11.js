var foo = function(){
	return function(){
		console.log('return value');
	};
};d

var bar = foo();
bar();
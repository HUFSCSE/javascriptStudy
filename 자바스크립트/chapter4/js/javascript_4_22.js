function add(a, b){
	console.dir(arguments);
	return a + b;
}
console.log('add1 = ' + add(3));
console.log('add1,2 = ' + add(3, 6));
console.log('add1,2,3 = ' + add(3, 6, 9));
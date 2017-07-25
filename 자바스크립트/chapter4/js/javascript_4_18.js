function parent(){
	var a = 100;
	var b = 200;

	function child(){
		var b = 300;

	console.log(a);
	console.log(b);
	}
	child();
}
parent();
child();
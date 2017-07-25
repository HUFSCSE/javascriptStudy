var value = 100;
var myObj = {
	value:1,
	func1: function(){
		this.value += 1;
		console.log('1 ', + this.value);

		func2 = function(){
			this.value +=1;
			console.log('2 ', + this.value);

			func3 = function(){
				this.value +=1;
				console.log('3 ', + this.value);
			}
			func3();
		}
		func2();
	}
};
myObj.func1();
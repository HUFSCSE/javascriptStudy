var array = [];
		array[0] = function(){return 200;}
		array[1] = function(){return 300;}
		array[2] = function(){return 400;}

		for(arr in array){
			console.log(array[arr]());
		}

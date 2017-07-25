/*4-22-2*/
function sum(){
	var result = 0;
	for(var i = 0; i < arguments.length; i++){
		result +=  arguments[i];
	}
	return result;
}
console.log("1+2+3 = " + sum(1,2,3));
console.log("1+2+3+4+5= " + sum(1,2,3,4,5));
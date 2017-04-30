function convert(){
  console.log(arguments);
  var arr = Array.prototype.slice.apply(arguments);

  console.log(arr);
  return arr;
}

convert(1,2);
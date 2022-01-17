var number = function(array) {
  if(array == []){
    return [];
  }
  return array.map(function(a,index){
    return (index + 1) +  ": " + a;
  })
}

console.log(number(["a", "b", "c"]));
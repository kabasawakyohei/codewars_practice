
function evenAndOdd(num){
  
  let arrNE = []
  let arrNO = []
  
  const newArr = num.toString().split("")
  console.log(newArr);
  for(let i = 0; i < newArr.length; i++){    
    if( newArr[i] % 2 === 0 ) arrNE.push(newArr[i])
    if( newArr[i] % 2 !== 0 ) arrNO.push(newArr[i])
  }
  return [Number(arrNE.join("")), Number(arrNO.join(""))]
}

console.log(evenAndOdd(126453));
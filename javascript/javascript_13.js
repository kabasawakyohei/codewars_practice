// 求めたいのは配列の要素の数なので初期値0を用意する
// start num ~ end num までの要素をループで回し、回った数だけ初期値に1ずつ足していく
// 5が含まれる場合、以外を条件分岐で判断し1ずつ足していくものとする

function dontGiveMeFive(start, end)
{
  let total = 0;
  
  for(let i = start; i <= end; i++){
    if(!i.toString().includes('5')){
      total += 1;
    }
  };
  return total;
}



console.log(dontGiveMeFive(1,9));

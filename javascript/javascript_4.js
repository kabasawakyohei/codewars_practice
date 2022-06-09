// 配列の要素の最大値のみ抽出
// function twoOldestAges(ages){
//  const max = ages.reduce(function(a,b){
//    return Math.max(a,b);
//  });
// }
// twoOldestAges([1,5,87,45,8,8]);

// 配列の要素を大き順に並び替えてインデックス番号0と1を取り出す
// function twoOldestAges(ages){
//   const empty = ages.sort(function(a,b){
//     return a-b;
//   })
//   const a = empty.slice(-2);
//   console.log(a);
// }

function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}

 console.log(twoOldestAges([9,10,51,46,69,12,17,79,77]));
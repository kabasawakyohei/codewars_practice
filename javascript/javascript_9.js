
function solution(digits){
  let answer = 0;
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //sucstr() stringオブジェクトの開始から終了までの集合体を取り出す
    if(Number(number) > answer){
      answer = Number(number);
    }
  }
  return answer;
}

console.log(solution('283910'));
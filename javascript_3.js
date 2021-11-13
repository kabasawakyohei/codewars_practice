function sevenAte9(str){
  return str.replace(/(?<=7)9(?=7)/g, '');

}

console.log(sevenAte9('7979797'))

function filter_list(array) {
  //　目的　文字列を削除した数字のみの配列を返したい
　//　配列の要素を一つずつ取り出して型のチェック
	return array.filter(l => typeof l === 'number')
}

console.log(filter_list([1,2,'a','b']));

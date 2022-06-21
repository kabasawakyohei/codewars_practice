def least_larger(array, position)
  # 配列の要素から与えられたインデックス番号の要素よりも大きいものを取り出す
  smallest_larger = array.sort.find {|num| num > array[position]}
  p array[position] # 4
  p smallest_larger # 5
  p array.index(smallest_larger) # 5のインデックス番号を取得する 3
  # 三項演算子でsmallest_largerがnilもしくは空文字でないことを確認する
  smallest_larger ? array.index(smallest_larger) : -1
end

p least_larger([4, 1, 3, 5, 6], 0)

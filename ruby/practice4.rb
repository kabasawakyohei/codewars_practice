def find_smallest_int(arr)

  # 配列の要素の最小の数字をreturnする
  # 配列の要素をソートかけて最小の数値を先頭にした配列に書き換える
  # 先頭の要素をreturnする

  arr.sort![0]
end


p find_smallest_int([78,56,232,12,8])

p find_smallest_int([-78,56,-2,12,8])


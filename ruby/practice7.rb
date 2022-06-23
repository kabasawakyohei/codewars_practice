def seven_ate9(str)
  while str.include?("797")
    str.gsub!("797", "77")
  end
  return str
end

p seven_ate9('7979797')

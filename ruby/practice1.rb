require "pry"

def coprime?(n, m)
  n_array = []
  m_array = []

  (1..n).each { |numN|
    n_array << numN if n % numN == 0
  }
  # binding.pry 

  (1..m).each { |numM|
    m_array << numM if m % numM == 0
  } 
  
  merge = ( n_array & m_array )
  result = merge.length

  if result == 1
    return true
  else
    return false
  end
end

puts coprime?(20, 27)
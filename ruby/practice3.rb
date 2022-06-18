def validate_usr(username)
  
  if (username.length < 4) || (username.length > 16) 
    return false
  elsif username.downcase != username
    return false
  elsif username.include? "?" 
    return false
  elsif username.include? " "
    return false
  elsif username.include? "!"
    return false
  elsif username.include? ","
    return false
  elsif username.include? "."
    return false
  else
    return true
  end
end

p validate_usr('asddsa')

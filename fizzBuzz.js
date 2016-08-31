function fizzBuzz(num){
  var result = ''
  if(num % 3 === 0) result += 'fizz'
  if(num % 5 === 0) result += 'buzz'

  return result ? result : num
}

for(var i = -10; i < 0; i++){
  console.log(fizzBuzz(i));
}

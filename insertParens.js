function insertParens(input) {
  var result = []
  function build(buildUp, depth) {
    if(depth === input.length) {
      return result.push('(' + buildUp + ')')
    }

    build(buildUp + input[depth].toString(), depth + 1)
    build(buildUp + ')(' + input[depth].toString(), depth + 1)
  }

  build(input[0].toString(), 1)

  return result
}
var letters = 'abcd'
console.log(insertParens(letters))

module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false
  let res = []
  for (let i = 0; i < str.length; i++) {
      for (let bracket of bracketsConfig) {
          if (str[i] === bracket[0] && str[i + 1] === bracket[1]) {
              res = str.replace(bracketsConfig[0]+bracketsConfig[1], '')
              return true 
          }

      }
  }
  if (res.length % 2 == 0) return false
  else return true
}

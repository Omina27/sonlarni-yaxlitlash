var numbers =[3.02,-3.95,5,9]

var normalizeNumbers = function (numbersArr) {
  var newArr = new Array()

  for (let i = 0; i < numbersArr.length; i++) {
    newArr.push(Math.abs(Math.round(numbersArr[i])))
  }

  return newArr
}

var result = normalizeNumbers (numbers)
console.log(result);


let pruebaNum = 4782355

function numberArranger(number) {
    let digitsStr = number.toString().split('').sort().reverse().join('')
    return parseInt(digitsStr)  
}

test = numberArranger(pruebaNum);

console.log(test)
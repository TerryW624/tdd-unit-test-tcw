function addTwoNumbers(num1, num2) {
    // This will add num1 and num2 and return the value
    return num1 + num2
}

function divTwoNumbers(num1, num2) {
    // This will decide the divisor and the dividend based off of a comparison operator
    // and then divide
    if (num1 > num2) {
        return num1/num2
    } else {
        return num2/num1
    }
}

function multTwoNumbers(num1, num2) {
    //This will multiply two numbers
    return num1 + num2
}

function diffTwoNumbers(num1, num2) {
    // This will decide the minuend and the subtrahend and based off of a comparison
    // operator and then subtract.
    if (num1 > num2) {
        return num1 - num2
    } else {
        return num2 - num1
    }
}

export {addTwoNumbers, divTwoNumbers, multTwoNumbers, diffTwoNumbers}
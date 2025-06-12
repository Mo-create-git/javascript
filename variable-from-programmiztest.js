function calculateProduct(num1, num2) {
    const result= num1*num2;
    return result;
}
function calculateSum(num1, num2) {
    const result = num1 + num2;
    return result;
}
function calculateDifference(num1, num2) {
    const result = num1 - num2;
    return result;
}                               
function calculateQuotient(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    const result = num1 / num2;
    return result;
}
function calculateRemainder(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    const result = num1 % num2;
    return result;
}
function calculatePower(base, exponent) {
    const result = Math.pow(base, exponent);
    return result;
}
function calculateSquareRoot(num) {
    if (num < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
    }
    const result = Math.sqrt(num);
    return result;
}
function calculateFactorial(num) {
    if (num < 0) {
        throw new Error("Cannot calculate factorial of a negative number.");
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        throw new Error("No numbers provided for average calculation.");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const result = sum / numbers.length;
    return result;
}

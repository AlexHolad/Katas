const isPalindrome = (x) => {
    const str = x.toString()
    const strReversed = x.toString().split('').reverse().join('')
    console.log(strReversed)
    return str === strReversed
};

console.log(isPalindrome(-121))
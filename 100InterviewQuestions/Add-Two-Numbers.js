const addTwoNumbers = (l1, l2) => {
    const  reversedNumber1 = l1.reverse().join('')
    const  reversedNumber2 =l2.reverse().join('')
    return Number(reversedNumber1 + reversedNumber2).toString().split('').reverse()
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))

    // reverse arrays
    // create numbers
    // sum
    // reverse sum
    
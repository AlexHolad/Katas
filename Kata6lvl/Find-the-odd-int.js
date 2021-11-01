const findOdd = (A) => {
    sortedArr = A.sort((a,b)=> a-b)
    result = ''
    console.log(sortedArr)
    for(let i = 0; i < A.length; i++){
        if(sortedArr[i] === sortedArr[i+1]){
            let x = sortedArr.shift()
            console.log(`This number is ${x}`)
        } else {
            return result = sortedArr[i]
        }
        // console.log(sortedArr, sortedArr[i])
    }

    return result
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //-1;

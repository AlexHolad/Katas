const isHappy = (n) => {
  let result = n;
  let resultChecker = [];
  let resultMeetInChecker = 0
  while (result >= 1) {
    let newArr = result.toString().split("").map(Number);
    result = 0;
    for (let i = 0; i < newArr.length; i++) {
      result += newArr[i] ** 2;
    }
    if (result === 1) {
      return true;
    }
    resultChecker.forEach((curr) => result === curr ?  resultMeetInChecker++ : console.log('same'));
    if (resultMeetInChecker > 3 ) {
      return false;
    }
    resultChecker.push(result);
    console.log(resultChecker)
    resultMeetInChecker = 0
  }
};

console.log(isHappy(1578943652)); 

// https://www.codewars.com/kata/59e270da7997cba3d3000041/train/javascript LINK
// NOT SOLVED

const zeroPlentiful = (arr) => {
  let sequence = 0;
  let result = 0;
  arr.forEach((element) => {
    if (element === 0) {
      sequence++;
    } else if (element !== 0 && sequence > 3) {
        result++
        sequence=0
    } else {
        sequence = 0
    }
    // console.log(element,"element")
    // console.log(result,"result")
  });
  if(sequence > 3){
      result++
  }
  return result;
};

console.log(zeroPlentiful([ 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0, 0 ]));





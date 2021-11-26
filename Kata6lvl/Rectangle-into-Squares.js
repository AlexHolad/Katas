const sqInRect = (lng, wdth) => {
  //your code here
  if (lng === wdth) {
    return null;
  }
  let rectangle = [lng, wdth];
  let result = [];
  for (let i = 0; rectangle[0] > 0 && rectangle[1] > 0; i++) {
    if (rectangle[0] > rectangle[1]) {
      rectangle[0] = rectangle[0] - rectangle[1];
      result.push(rectangle[1]);
      console.log(result);
    } else {
      rectangle[1] = rectangle[1] - rectangle[0];
      result.push(rectangle[0]);
    }
  }
  return result;
};

console.log(sqInRect(3, 5))
console.log(sqInRect(20, 14)); //[14, 6, 6, 2, 2, 2]

// IDEA
//  Minus leses number lng or wdth
// 20x14
rectangle[20,14]

20 - 14 push result
6x14
14 - 6 push result
8x6
8 - 6 push result
2x6
6 - 2 push result
4x2
4 - 2 push result
2x2
2 - 2 push result

0x0 stop loop

// IDEA

// x = 14 % 6 = 2

// y = 6 % 2 = 3

// while(x !== 0){

//     result.push()

// }

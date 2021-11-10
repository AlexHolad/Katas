// BEST PRACTICE
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }


//   MY SOLUTION
// const createPhoneNumber = (numbers) => {
//   let phoneNumber = [];
//   const pusher = (str) => phoneNumber.push(str);
//   for (let i = 0; i < numbers.length; i++) {
//     if (i === 0) {
//       pusher("(");
//       pusher(numbers[i]);
//     } else if (i === 3) {
//       pusher(")");
//       pusher(" ");
//       pusher(numbers[i]);
//     } else if (i === 6) {
//       pusher("-");
//       pusher(numbers[i]);
//     } else {
//       pusher(numbers[i]);
//     }
//   }
//   return phoneNumber.join("");
// };

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

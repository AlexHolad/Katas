const getMostProfitFromStockQuotes = (quotes) => {
  let funcArray = [...quotes];
  let profit = 0;
  for (let i = 0; funcArray.length > 0; i++) {
    let sumOfBuying = 0;
    let maxPrice = Math.max(...funcArray);
    let indexOfMaxPrice = funcArray.indexOf(maxPrice);
    if (indexOfMaxPrice === 0) {
      funcArray = funcArray.filter((el, idx) => idx > indexOfMaxPrice);
    }
    if (funcArray[indexOfMaxPrice] < funcArray[indexOfMaxPrice - 1]) {
      return profit;
    }
    for (let j = 0; j < indexOfMaxPrice; j++) {
      sumOfBuying += funcArray[j];
    }
    if (indexOfMaxPrice !== 0) {
      profit += maxPrice * indexOfMaxPrice - sumOfBuying;
      funcArray = funcArray.filter((el, idx) => idx > indexOfMaxPrice);
    }
  }

  return profit;
};

console.log(
  getMostProfitFromStockQuotes([
    322, 861, 157, 284, 29, 368, 103, 516, 643, 868, 838, 608, 183, 312, 777,
    230, 560, 530, 721, 298, 1006, 674, 786, 879, 891, 266, 676, 707, 74, 96,
    829, 465, 586, 326, 875, 990, 12, 491, 645, 883, 608, 283, 464, 448, 967,
    273, 543, 753, 359, 367,
  ])
);
// console.log(getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ] ))
// console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7]));
// console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]))

// [ 1, 2, 3, 4, 5, 6 ]        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
//  [ 6, 5, 4, 3, 2, 1 ]        => 0   (nothing to buy for profit)
//  [ 1, 6, 5, 10, 8, 7 ]       => 18  (buy at 1,6,5 and sell all at 10)
//  [ 1, 2, 10, 3, 2, 7, 3, 2 ] => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)

const romanToInt = (s) => {
  const integerEcv = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1,
};
  const arrOfStr = s.split('')  
  let total = 0
       
for(let i = 0; i < arrOfStr.length; i++){
   if(integerEcv[arrOfStr[i]] < integerEcv[arrOfStr[i+1]]){
    total -= integerEcv[arrOfStr[i]]   
   } else {
    total += integerEcv[arrOfStr[i]]
   }  
 }

  return total
};

console.log(romanToInt("MCMXCIV"));

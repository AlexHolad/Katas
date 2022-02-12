const isPowerOfThree = (n) => {
    if(n < 0){
      return false
    }
    for(let i = 0; i <= n; i++){
      if(3**i === n){
        return true
      } 
      if(3**i > n){
        return false
      }  
    }
  };
              
  
              
  console.log(isPowerOfThree(27));
  console.log(isPowerOfThree(45));
  console.log(isPowerOfThree(0));
  console.log(isPowerOfThree(1));
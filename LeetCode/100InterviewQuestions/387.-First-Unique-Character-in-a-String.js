const firstUniqChar = (s) => {
    let charsQuantity = {};
    for (let i = 0; i < s.length; i++) {
      if (!charsQuantity[s[i]]) {
        charsQuantity[s[i]] = 1;
      } else {
        charsQuantity[s[i]]++;
      }
    }
    console.log(charsQuantity)

    let char;
    for (const i in charsQuantity) {
      // console.log(`${property}: ${object[property]}`);
      if(charsQuantity[i]===1){
        char=i
        console.log('Char is ', char)
        break
        
      }
      
    }

    // const arrOfEntries = Object.entries(charsQuantity);
    // let char;
  
    // for (let i = 0; i < arrOfEntries.length; i++) {
    //   if (arrOfEntries[i][1] === 1) {
    //     char = arrOfEntries[i][0];
    //     break;
    //   }
    // }
    return s.indexOf(char);
  };
  
  console.log(firstUniqChar("leetcode"));
  console.log(firstUniqChar("loveleetcode"));
  console.log(firstUniqChar("aaabb"));
  
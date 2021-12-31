const isValid = (s) => {
    

let strArr=s.split('')
// console.log(strArr)
 let arr=['(', ')', '[', ']', '{', '}']
 for(let i=0; i<strArr.length; i++){
     if(strArr.includes('(') && strArr.includes(')')){
         strArr.splice(i,1)
     }
//    console.log(s)
//    if(arr.some(brackets => s.includes(brackets))){
//      // strArr.splice(i,1)
//      s = s.replace('()', '')
//      s = s.replace('[]', '')
//      s = s.replace('{}', '')
   } 
 return strArr
}
//  return s.length > 0 ? false : true
console.log(isValid("(([]){})"))
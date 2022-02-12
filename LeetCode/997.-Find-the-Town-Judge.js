const findJudge = (n, trust) => {
 if(n === 1 && trust.length === 0){
     return 1
 }

 let trusters = {}
 let possibleJudges = {}
 
 for(let i = 0; i < trust.length; i ++){
     if(!trusters[trust[i][0]]){
        trusters[trust[i][0]] = trust[i][0]
     }

     if(!possibleJudges[trust[i][1]]){
        possibleJudges[trust[i][1]] = 1
     } else {
        possibleJudges[trust[i][1]]++
     }
 }
 console.log(trusters, possibleJudges)

 for(const property in possibleJudges){
     if(possibleJudges[property] === n -1 && !trusters[property]){
         return property
     }
 }

 return -1
};




console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
// console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
// console.log(findJudge(3, [[1,3],[2,3]]))

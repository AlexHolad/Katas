const countBits = (n) => {
   return (Number(n).toString(2).match(/1/g) || []).length
  };

console.log(countBits(5233989715))
console.log(countBits(8058207980))


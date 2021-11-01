function titleCase(title, minorWords) {
  if (title.length <= 0) {
    return "";
  }
  let result = title.toLowerCase().split(" ");

  if (arguments.length===1) {
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].substr(1);
    }
    return result.join(" ").toString();
  }
  // if(minorWords.length>0)
   let arrMinor = minorWords.toLowerCase().split(" ");
 
  for (let i = 0; i < result.length; i++) {
    if (!arrMinor.includes(result[i])) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].substr(1);
    } else {
      result[i] = result[i].charAt(0) + result[i].substr(1);
    }
  }
  result[0] = result[0].charAt(0).toUpperCase() + result[0].substr(1);

  return result.join(" ").toString();
}

console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));

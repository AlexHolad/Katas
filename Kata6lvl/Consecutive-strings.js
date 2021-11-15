const longestConsec = (strarr, k) => {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }
  let funcResult = "";
  let result = "";
  for (let i = 0; i < strarr.length; i++) {
    funcResult = strarr.slice(i, k).join("");
    if (funcResult.length > result.length) {
      result = funcResult;
    }
    k++;
  }

  return result;
};

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
("ixoyx3452zzzzzzzzzzzz");
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  )
);
// "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"

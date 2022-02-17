const lengthOfLongestSubstring = (s) => {
  if (s.length === 1) {
    return 1;
  }

  let funcStr = s;
  let arr = [];
  let currSubstr = "";

  for (let i = 0; i < funcStr.length ; i++) {
    if (!currSubstr.includes(funcStr[i])) {
      currSubstr += funcStr[i];


    } else {
      arr.push(currSubstr);

      currSubstr = "";
      let indexRepChar = funcStr.indexOf(funcStr[i]);
      funcStr = funcStr.slice(indexRepChar+1, funcStr.length);

      i = -1;
      
    }
  }
  arr.push(funcStr)

  let result = arr.reduce((acc, value)=> value.length > acc ? acc = value.length : acc + 0 ,0)

  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("qrsvbspk"));
// console.log(lengthOfLongestSubstring("tmmzuxt"));

// "qrsvbspk" --> "qrsvb", "vbspk"

// "dvdf" --> "dv", "vdf"

// "pwwkew" --> "pw", "wke", "kew"

// "bbbbb" --> 'b', 'b', 'b', 'b', 'b'

// "abcabcbb" --> 'abc', 'bca', 'cab', 'abc', 'cb', 'b'

// "tmmzuxt" --> "tm", "mzuxt"



//Solution from Medium
var lengthOfLongestSubstring = function (s) {
  // Initialise a set to store the longest string in
  let longestStringLength = 0;

  // Loop through the provided string
  for (let i = 0; i < s.length; i++) {
      // Initialise a set to store the string created from the current point
      let currentStringSet = new Set();

      // Loop through the letters from the current point
      for (let x = i; x < s.length; x++) {
          // Check if the current letter exists in the current Set
          if (currentStringSet.has(s[x])) {
              // Move on from the current letter without adding it (as it already exists in the set)
              break;
          } else {
              // Character not found, add it to the set
              currentStringSet.add(s[x]);
          }
      }

      // Update the longest string length (if this one was bigger)
      longestStringLength = Math.max(
          longestStringLength,
          currentStringSet.size
      );
  }

  return longestStringLength;
};

//Array Solution

var lengthOfLongestSubstring = function (s) {
  // Initialise an array to store the running characters and a longest string length variable
  let currentString = [];
  let longestStringLength = 0;

  // Loop through the provided string
  for (let i = 0; i < s.length; i++) {
      // Attempt to get the current character's position in the current string
      const currentCharacterPosition = currentString.indexOf(s[i]);

      // Check if the current character exists in the current string
      if (currentCharacterPosition !== -1) {
          // Chop the array off after the occurence of the character
          currentString.splice(0, currentCharacterPosition + 1);
      }

      // Add the current character to the array
      currentString.push(s[i]);

      // Store the current string length if bigger than the existing record
      longestStringLength = Math.max(
          longestStringLength,
          currentString.length
      );
  }

  return longestStringLength;
};

//Set

var lengthOfLongestSubstring = function (s) {
  // Store counters for the biggest string, the start of the window, and the current letter's position (end of window)
  let longestStringLength = 0,
      startOfWindow = 0,
      currentPosition = 0;

  // Initialise a Set to store the characters
  let characterSet = new Set();

  // Loop through the provided string
  while (currentPosition < s.length) {
      // Check if the current character exists in the Set
      if (characterSet.has(s[currentPosition])) {
          // If so, delete it from the Set (as it will be picked up on the next run), and move the window's start forwards
          characterSet.delete(s[startOfWindow++]);
      } else {
          // If not, add the current character to the Set, and move the current character forwards
          characterSet.add(s[currentPosition++]);
          longestStringLength = Math.max(
              longestStringLength,
              characterSet.size
          );
      }
  }

  return longestStringLength;
};

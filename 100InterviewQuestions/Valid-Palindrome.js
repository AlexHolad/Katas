const isPalindrome = (s) => {
    let str = s.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replaceAll(" ",'').toLowerCase()
      return str === str.split("").reverse().join("")
};

console.log(isPalindrome("ab_a"))

// /([A-Z])\w+g
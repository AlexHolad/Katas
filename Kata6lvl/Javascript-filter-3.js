const searchNames = (logins) => {
  return logins.filter((login, i, arr) => {
    return (
      login.includes("@") &&
      (arr[i - 1].charAt(0) === "." ||
        arr[i - 1].charAt(arr[i - 1].length-1) === ".")
    );
  });
};

console.log(
  searchNames([
    "foo",
    "foo@bar.com",
    "bar.",
    "bar@foo.com",
    ".foo",
    "food@bar.com",
  ])
);

// name start o end with '.'
// return email after

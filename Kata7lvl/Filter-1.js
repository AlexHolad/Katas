const searchNames = (logins) => {
  return logins.filter(
    (loginArr) => loginArr[0][loginArr[0].length - 1] === "_"
  );
};

console.log(
  searchNames([
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"],
  ])
);

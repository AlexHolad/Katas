const FilterString = (value) => {
  return Number(value.match((/\d/g).join("")))
};

console.log(FilterString("aa1bb2cc3dd"));

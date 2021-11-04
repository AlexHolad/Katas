const waterbombs = (fire, w) => {
  //Good luck!
  let counter = 0;
  let waterBomb = 0;

  for (let i = 0; i < fire.length; i++) {
    if (fire[i] === "x") {
      counter++;
    } else {
      counter = 0;
    }
    if (counter === 1) {
      waterBomb++;
    }
    if (counter === w) {
      counter = 0;
    }
  }
  return waterBomb;
};

console.log(waterbombs("xxxxxxxxxxxxxxxxxYxx", 4));

counter = 2;
waterBomb = 2;

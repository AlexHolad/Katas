// https://www.codewars.com/kata/5262fa26875ed24a3e000029/train/javascript

const roomMates = (rooms, floor) => {
  return rooms.filter(
    (room, i) => i + 1 <= floor * 6 && i + 1 > floor * 6 - 6 && room !== ""
  );
};

// floor*6 // last room of floor
// floor*6 - 6 // first room of floor
// i-1     //

console.log(
  roomMates(
    ["Jill", "Jackson", "Jan", "Eve", "", "John", "Jimmy", "Tom", "", "Duke"],
    2
  )
);

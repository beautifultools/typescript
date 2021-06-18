/**
 * Let's make a game 🕹
 */
type Position = {
  x: number;
  y: number;
};

type Command = "up" | "down" | "left" | "right";

const position = {
  x: 0,
  y: 0,
};

function move(command: Command) {
  if (command == "up") {
    position.y++;
  } else if (command == "down") {
    position.y--;
  } else if (command == "left") {
    position.x--;
  } else if (command == "right") {
    position.x++;
  } else {
    throw Error("unknown command");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}

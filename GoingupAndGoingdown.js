console.log("You guess a number between 1 and 100");
let createNumber = Math.floor(Math.random() * 100 + 1);

let guess = -1;
let guessCounter = 0;
console.log("Created number :" + createNumber);

console.log("-------------------");

while(guess != createNumber){

guess = parseInt(prompt("Enter a number between 1 and 100"));
console.log("Your guess number :" + guess);
guessCounter++;

  if (createNumber == guess) {
    console.log("Congratulations! You done! | Your guess coun:"+guessCounter);
  }
  else if (createNumber < guess) {
    console.log("Go down!");
  }
  else if (createNumber > guess) {
    console.log("Go up!");
  }
  else if (isNaN(guess)) {
    console.log("Please just enter a number!");
  }

}
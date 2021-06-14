let limit = 50; //graduate limit
let vize1 = 70, vize2 = 80, vize3 = 90;
let final1 = 80, final2 = 90, final3 = 100;

//enter vize exam with prompt
vize1 = parseInt(prompt("Enter 1. vize exam"));
vize2 = parseInt(prompt("Enter 2. vize exam"));
vize3 = parseInt(prompt("Enter 3. vize exam"));
//enter final exam with prompt
final1 = parseInt(prompt("Enter 1. final exam"));
final2 = parseInt(prompt("Enter 2. final exam"));
final3 = parseInt(prompt("Enter 3. final exam"));

let vizeAverage = (vize1 + vize2 + vize3)/3; //vize average
let finalAverage = (final1 + final2 + final3)/3; //final average

let vizePersentage = (40*vizeAverage)/100;
let finalPersentage = (60*finalAverage)/100;

let averageScore = vizePersentage + finalPersentage; //average graduate 

console.log("vize average :"+vizePersentage);
console.log("Final average :"+finalPersentage);
console.log("Your graduate average: "+averageScore);

// give your graduate score
if(averageScore < limit){
  console.log("you did not graduate");
}
else if(averageScore <= 60){
  console.log("F");
}
else if(averageScore <= 70){
  console.log("D");
}
else if(averageScore <= 80){
  console.log("C");
}
else if(averageScore <= 90){
  console.log("B");
}
else if(averageScore <=100){
  console.log("A");
}
else if(averageScore >100){
  console.log("WRONG! 100+ is not graduate");
}
else if(isNaN(averageScore)){
  console.log("Wrong something else. Please just enter number");
}
// this is solving part 1 of the assignment
var number1 = 5
var number2 = 22

console.log(number1 + number2);

var string1 = "hey"
var string2 = "how's it going"

console.log(string1 + " " + string2);

// this is solving part 2 of the assignment

var hobbies = ["watching footie", "reading books", "going to shows"]
var favBands = ["Brand New", "Daughter", "Phosphorescent"]
var things = [hobbies, favBands]

console.log(things [0][0]);
console.log(things [1][2]);

// this is solving part 3 of the assignment

function whatsThisNumber(number) {
  if (number<100) {
    return alert("your number is less than 100!");
  } else {
    return alert("your number is " + number + " and is greater than 100");
  }
}

whatsThisNumber(222);

// this is solving part 4 of the assignment


function sayMyName(name) {
  return alert(name);
}

sayMyName("Brian");

// this is solving part 5 of the assignment

function whichDoor(doorNumber){
  if(doorNumber===1){
    return alert("you just won a dog");
  } else if(doorNumber===2){
    return alert("you just won a cat");
  } if(doorNumber===3){
    return alert("YOU JUST GOT A WHAMMY. YOU LOSE");
  }
}

whichDoor(3);

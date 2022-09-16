/////////////////////////////////////////////////////////////////
///////////  Drag Race #1
/////////////////////////////////////////////////////////////////

//_______________Exaplanation
// Drag race between Anna and Bob
// Inputs:
//      lenght of the track (meters, straight, flat, no obstructions, no change in terrain) floats? other numeric systems (e.g. kilometers)
//      anna's car (speed: number, constant, m/s reactionTime: s, number, no delay between acceleration and speed)
//      bob's car ^""
// cars = Object
//          speed in m/s
//          reactionTime of the driver in s
//        }
// output: "It's a draw" | "[name] is the winner"

//_______________Examples
// len:800m
// anna:25m/s, 0s
// bob:30m/s, 0s
// bob wins

// len:800m
// anna:30m/s, 0s
// bob:30m/s, 1s
// anna wins

// len:800m
// anna:30m/s, 0s
// bob:20m/s, 2s
// ?

// len: empty? => do we have a placeholder?
// car: empty? => error
// car[speed]: empty? => what if both speeds are empty, what if one speed is empty
// car[reation]: empty? => what if both reactions are empty, what if its only one of them
// what is invalid inputs are provided

//_______________Skeleton

function Car(speed, reactionTime) {
  this.speed = speed;
  this.reactionTime = reactionTime;
}

function dragRace(len, anna, bob) {
  // how long to cross finish line in seconds
  // len / carSpeed = time to cross

  let annaCrossTime = len / anna.speed;
  let bobCrossTime = len / bob.speed;

  // time to finish line - reaction time = net time to cross finish line
  let annaNet = annaCrossTime + anna.reactionTime;
  let bobNet = bobCrossTime + bob.reactionTime;
  console.log(annaNet, bobNet);

  // who was the shortes time to cross = "[name] is the winner"
  if (annaNet < bobNet) {
    return "Anna is the winner";
  } else if (bobNet < annaNet) {
    return "Bob is the winner";
  } else if (annaNet == bobNet) {
    return "It's a draw";
  } else {
    return "error";
  }
  // if both have same time = "It's a draw"
}

const ANNA = new Car(40, 2); //
const BOB = new Car(40, 1);
// console.log(dragRace(100, ANNA, BOB));

// Track length is 10m, Anna's speed is 4m/s, Anna's reaction time is 2s, Bob's speed is 4m/s, Bob's reaction time is 1s): expected 'Anna is the winner' to equal =>'Bob is the winner'<=

/////////////////////////////////////////////////////////////////
//////  Credit Card Mask
/////////////////////////////////////////////////////////////////

// return masked string

// grab a string, and swap characters to #, except the last 4
// input: string
// output: string

// "+123456789" => "######6789"
// "1234" => "1234"
// "" => ""
// "2122 21st St" => "########t St"

function maskify(string) {
  // making string an array for iteration
  let wordArr = string.split("");
  // new array to push masked string
  let masked = [];

  // iterating through the string
  for (let i = 0; i < wordArr.length; i++) {
    // get the index last four digit begin
    let cut = wordArr.length - 4;
    // if iteration index is below the cut, push # mask
    if (i < cut) {
      masked.push("#");
      // if index is at or above cut, we push character unmasked
    } else if (i >= cut) {
      masked.push(wordArr[i]);
    }
  }
  // return masked array joined into string
  return masked.join("");
}

// console.log(maskify("batmansuperman"));

//__________________________
// Alternate solution

function maskify(string) {
  //    slice(start, end).replace(pattern, replacement)
  //    string(from 0 to -4).replace all with #, add string(-4, .)
  return string.slice(0, -4).replace(/./g, "#") + string.slice(-4);
}

/////////////////////////////////////////////////////////////////
//////  Simple Fun #1: Seats in Theater
/////////////////////////////////////////////////////////////////

// Seated in the theater, and I want to exit
// Calculate how many people's view will I obstruct as I leave (people count: starting
// from cols behind position to the right x row behind position to the top
// Asume all seats are occupied
// cols, start from the leftmost at index 1
// rows, start from bottommost at index 1

// inputs: nCols is number of colums
// nRows is the number of rows
// col is at which column I am seated (grid)
// row is at which row I am seated (grid)

// output: return total number of people I will obstruct

// Examples: 10cols, 10rows, 5col, 5row === 30people
// 5cols, 3row, 1col, 1row === 8people
// nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96

function seatsInTheater(nCols, nRows, col, row) {
  // row-1 - nRows => calculate the obstructed rows = obstructedRows
  // col-1 - nCols => calculate the obstructed cols = obstructedCols
  // obstructRows x obstructCols = total number of people obstructured
  let obstructedRows = nRows - row;
  let obstructedCols = nCols - (col - 1);
  console.log(obstructedRows, obstructedCols);
  return obstructedRows * obstructedCols;
  // return total number of people I will obstruct
}

// console.log(seatsInTheater(16, 11, 5, 3));

/////////////////////////////////////////////////////////////////
////// 
/////////////////////////////////////////////////////////////////

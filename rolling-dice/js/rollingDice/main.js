// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");
    
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let diceGame = () => {
    
    let numToStr = (dieValue) => {
        let dieString = "";
    
        switch (dieValue) {
            case 1:
              dieString = "One";
              break;
            case 2:
                dieString = "Two";
              break;
            case 3:
                dieString = "Three";
              break;
            case 4:
              dieString = "Four";
              break;
            case 5:
                dieString = "Five";
              break;
            case 6:
                dieString = "Six";
              break;
          }
        return dieString;
    }

    for (let i = 0; i < 10; i++) {
        let die1 = getRandomInt(1, 6);
        let die2 = getRandomInt(1, 6);
        let dieOne = numToStr(die1)
        let dieTwo = numToStr(die2)
        let message = `${dieOne} + ${dieTwo} === ${die1 + die2}`;
        if (die1 === die2) {
            message += " DOUBLES!";
        }
        console.log(message);
    }
}

diceGame();






// let die1 = getRandomInt()





// let dieString = "Unknown";

// switch (value)
//         {
//             /* "case 1:" is like the following "if" statement
//             if (this.Value == 1) {
//                 dieString = "one";
//             }
//             */
//             case 1:
//                 dieString = "one"; // These \uXXXX values are fancy unicode characters
//                 break;
//             case 2:
//                 dieString = "two";
//                 break;
//             case 3:
//                 dieString = "three";
//                 break;
//             case 4:
//                 dieString = "four";
//                 break;
//             case 5:
//                 dieString = "five";
//                 break;
//             case 6:
//                 dieString = "six";
//                 break;
//         }
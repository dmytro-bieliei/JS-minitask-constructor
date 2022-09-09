// 1-st task

const isAdult = function(age) {
  if ( age > 17 ) {
    return true;
  } else {
    return false;
  }
}
isAdult();

// 2-nd task

// const num1 = prompt('Enter first number');
// const num2 = prompt('Enter second number');
// let checkMultiplicity = function(num1, num2) {
//   let check = +num1 % +num2;
// if( check !== 0 ) {
//   checkMultiplicity = true;  
//   } else {
//     checkMultiplicity = false;
//   }
//   return console.log(check);
// }

// checkMultiplicity();

// 3rd task

// const firstSide = +prompt(' Enter first triangle side lenght');
// const secondSide = +prompt(' Enter second triangle side lenght');
// const thirdSide = +prompt(' Enter third triangle side lenght');

// const trianglePossibility = function(firstSide, secondSide, thirdSide) {
//   if (firstSide > (secondSide + thirdSide)) {
//     trianglePossibility = true;
//   } if (secondSide > (firstSide + thirdSide) ) {
//     trianglePossibility = true;
//   } if (thirdSide > (firstSide + secondSide)) {
//     trianglePossibility = true;
//   } else {
//     trianglePossibility = false;
//   }
//   return alert(trianglePossibility);
// }
// trianglePossibility();
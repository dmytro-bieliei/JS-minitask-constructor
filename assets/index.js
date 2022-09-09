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

const checkMultiplicity = function(number1, number2) {
  if( isNaN(number1 - number2)) {
    number1 % number2 === 0;
    return true;
  }else {
  return false;
  }
}

checkMultiplicity();

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
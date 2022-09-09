// 1-st task

const isAdult = function(age) {
  if ( age > 17 ) {
    return true;
  } else {
    return false;
  }
};
isAdult();

// 2-nd task

const checkMultiplicity = function(number1, number2) {
  if( isNaN(number1 - number2)) {
    number1 % number2 === 0;
    return true;
  }else {
  return false;
  }
};
checkMultiplicity();

// 3rd task

const trianglePossibility = function(firstSide, secondSide, thirdSide) {
  if (isNaN(firstSide - secondSide - thirdSide)){
  return firstSide > secondSide + thirdSide && secondSide > firstSide + thirdSide && thirdSide > firstSide + secondSide;
  }
};
trianglePossibility();

// Always false ?

// 4th task



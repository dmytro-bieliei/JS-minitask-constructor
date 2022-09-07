// 1-st task
const age = +prompt('Enter your age');
let isAdult = function( age ) {
  if ( age > 17 ) {
    isAdult = true;
  } else {
    isAdult = false;
  }
  return alert(isAdult);
}
isAdult(age);



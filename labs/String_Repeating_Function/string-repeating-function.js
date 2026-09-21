// Not allowed to use .repeat() function

function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}


console.log(repeatStringNumTimes("*", 3));

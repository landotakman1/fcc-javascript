function fearNotLetter(str) {
  const compareString = "abcdefghijklmnopqrstuvwxyz";
  let startLocation = findFirstLetter(compareString, str[0]);
  let targetStr = ""
  for (let i = 0; i < str.length; i++) {
    targetStr += compareString[startLocation + i];
  }
  for (let i = 0; i < targetStr.length; i++) {
    if (targetStr[i] !== str[i]) {
      console.log(`Letter ${str[i]} does not match the target letter, ${targetStr[i]}!`);
      return targetStr[i];
    }
  }
}


function findFirstLetter(testString, char) {
  for (let l of testString) {
  console.log(l)
    if (l === char.toLowerCase()) {
      return testString.indexOf(l);
    }
  }
}




console.log(findFirstLetter("abcdefghijklmnopqrstuvwxyz", "a"))
console.log(fearNotLetter("abcdefghjklmno"));

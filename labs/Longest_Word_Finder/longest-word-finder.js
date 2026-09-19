const testSentence = "The quick brown fox jumped over the lazy dog";

function findLongestWordLength(str) {
  let strArr = [];
  let maxLength = 0;
  strArr = str.split(" ");
  for (let word of strArr) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength(testSentence));

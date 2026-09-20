function mutation(arr) {
  let result;
  let containsString = arr[0].toLowerCase();
  let compareString = arr[1].toLowerCase();
  let comStringLetters = compareString.split("");
  for (let i = 0; i < comStringLetters.length; i++) {
    if (containsString.includes(comStringLetters[i])) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

console.log(mutation(["hello", "hey"]));

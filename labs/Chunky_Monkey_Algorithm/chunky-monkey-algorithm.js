function chunkArrayInGroups(array, num) {
  let outerArray = [];
  let endIndex = num;
  for (let i = 0; i < endIndex; i++) {
    outerArray.push(array.splice(0, num));
    if (array.length === 0) {
      break;
    } else {
      endIndex++;
    }
  }
  return outerArray;
  
  
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

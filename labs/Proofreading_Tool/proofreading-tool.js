// Build a proofreading tool that analyzes arrays of words for palindromes and repeated phrases

// Test Variables *
const testArray = ["the", "racecar", "the", "top", "flew", "over", "the", "top", "flew", "over", "level"];




// This function should take a 'word' string as its argument.
// It should return true if the word reads the same forwards and backwards (case-insensitive), and false otherwise.
function isPalindrome(word) {
  // First, reverse word
  let lowerWord = word.toLowerCase();
  let revWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    revWord += lowerWord[i];
  }
  
  if (revWord === lowerWord) {
    return true;
  } else {
    return false;
  }
}


// This function should take a 'words' array as its argument.
// It should return an array of indices of words that are not palindromes.
// It should return an empty array if the input is empty.
function findPalindromeBreaks(words) {
  // Loop through array of words, word by word
  let nonPalindromeIndices = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      nonPalindromeIndices.push(i);
    }
  }
  return nonPalindromeIndices;
}



// This function should take a 'words' array and a phraseLength number as arguments.
// It should return an array of all start indices where a sequence of phraseLength consecutive words appears more than once in the array., including the index of
// the first occurence.
// It should return an empty array if phraseLength is greater than or equal to the length of words.
// Overlapping sequences should also be counted.
function findRepeatedPhrases(words, phraseLength) {
   const startIndices = [];

  if (phraseLength >= words.length) {
    return startIndices;
  }

  // First time through, record every start index for each phrase
  const locations = {};

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    console.log(phrase);

    if (!locations[phrase]) {
      locations[phrase] = [];
    }
    locations[phrase].push(i);
  }

  // Second time through, keep indices whose phrase occurred more than once
  for (const phrase in locations) {
    if (locations[phrase].length > 1) {
      startIndices.push(...locations[phrase]);
    }
  }

  startIndices.sort((a,b) => a - b);
  return startIndices;
  
}


// This function should take a 'texts' array and a 'phraseLength' number as arguments.
// It should process each element of 'texts' (each an array of words) and return an array of objects, each with 'repeatedPhrases' and 'palindromeBreaks' props
// It should return an empty array if 'texts' is empty.
function analyzeTexts(texts, phraseLength) {
  const objArray = [];

  for (let i = 0; i < texts.length; i++) {
    objArray.push({ repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength), palindromeBreaks: findPalindromeBreaks(texts[i])});
  }

  return objArray;
}



analyzeTexts([["racecar", "hello", "level", "hello"]], 1);

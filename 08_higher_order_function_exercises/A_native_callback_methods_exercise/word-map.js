function wordMap(sentence, wordMapObj) {
    // split the sentence into an array of words
    const words = sentence.split(' ');
  
    // use Array.map() to replace words with their corresponding values
    const mappedWords = words.map((word) => {
      // if the word is a key in the wordMapObj, replace it with the corresponding value
      if (wordMapObj.hasOwnProperty(word)) {
        return wordMapObj[word];
      } else {
        return word;
      }
    });
  
    // join the mapped words back into a sentence
    const mappedSentence = mappedWords.join(' ');
  
    return mappedSentence;
  }
  console.log(wordMap('open the pod bay doors', {pod: 'ship', open: 'close'})); 
  // 'close the ship bay doors'
  
  console.log(wordMap('breakfast food is good', {breakfast: 'brunch', good: 'great'})); 
  // 'brunch food is great'  
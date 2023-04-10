function mostLetterWord(sentence, char) {
    let maxCount = -1;
    let result = '';
    
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let count = 0;
      
      for (let j = 0; j < word.length; j++) {
        if (word[j] === char) {
          count++;
        }
      }
      
      if (count > maxCount) {
        maxCount = count;
        result = word;
      }
    }
    
    return result;
  }
  console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
  console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
  console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
  console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'
    
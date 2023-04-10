function trendyText(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let lastVowelIndex = -1;
      
      for (let j = word.length - 1; j >= 0; j--) {
        if (vowels.includes(word[j].toLowerCase())) {
          lastVowelIndex = j;
          break;
        }
      }
      
      if (lastVowelIndex !== -1) {
        words[i] = word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
      }
    }
    
    return words.join(' ');
  }
  console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
  console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
  console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'
    
function removeLastVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastVowelIndex = -1;
    
    for (let i = str.length - 1; i >= 0; i--) {
      if (vowels.includes(str[i].toLowerCase())) {
        lastVowelIndex = i;
        break;
      }
    }
    
    if (lastVowelIndex === -1) {
      return str;
    } else {
      return str.slice(0, lastVowelIndex) + str.slice(lastVowelIndex + 1);
    }
  }
    console.log(removeLastVowel("speaker")); // 'speakr'
    console.log(removeLastVowel("trading")); // 'tradng'
    console.log(removeLastVowel("thunder")); // 'thundr'
    console.log(removeLastVowel("myth")); // 'myth'

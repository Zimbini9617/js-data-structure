function funnyPhrase(sentence) {
    const words = sentence.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i % 2 === 0) {
        // double the vowels in every other word
        const doubled = doubleVowel(word);
        result += doubled;
      } else {
        // just append the original word
        result += word;
      }
      // append a space after every word (except the last one)
      if (i < words.length - 1) {
        result += ' ';
      }
    }
    return result;
  }
  
  function doubleVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        result += str[i] + str[i];
      } else {
        result += str[i];
      }
    }
    return result;
  }
  console.log(funnyPhrase("the quick brown fox jumps over the lazy dog"));
  console.log(funnyPhrase("hello world")); 
  console.log(funnyPhrase("this is a test sentence")); 
    
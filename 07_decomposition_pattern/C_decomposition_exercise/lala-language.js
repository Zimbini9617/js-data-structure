function lalaLanguage(sentence) {
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      if (word.length > 3) {
        const newWord = word.replace(/[aeiou]/g, '$&l$&');
        words[i] = newWord;
      }
    }
    
    return words.join(' ');
  }
  console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
  console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'
    
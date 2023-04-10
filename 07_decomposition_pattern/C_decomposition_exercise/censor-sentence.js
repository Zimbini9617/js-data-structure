function censorSentence(sentence, targetWords) {
    const words = sentence.split(' ');
    const censoredWords = words.map(word => {
      if (targetWords.includes(word)) {
        return '*'.repeat(word.length);
      } else {
        return word;
      }
    });
    return censoredWords.join(' ');
  }
  console.log(censorSentence('where the heck is my celery', ['heck', 'celery']));
  // 'where the **** is my ******'
  
  console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad']));
  // 'why you little **********'
    
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
  console.log(doubleVowel("runner")); // 'ruunneer'
  console.log(doubleVowel("stoplight")); // 'stoopliight'
  console.log(doubleVowel("gardener")); // 'gaardeeneer'
  
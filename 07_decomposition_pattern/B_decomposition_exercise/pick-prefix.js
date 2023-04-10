function pickPrefix(strings, prefix) {
    const result = [];
    
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].startsWith(prefix)) {
        result.push(strings[i]);
      }
    }
    
    return result;
  }
  console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
  // ['connect', 'concert']
  
  console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
  // ['mistake', 'misspeak', 'mission']
    
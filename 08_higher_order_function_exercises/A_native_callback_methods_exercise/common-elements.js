function commonElements(arr1, arr2) {
    // use Array.filter() to create a new array of elements that are in both arrays
    const common = arr1.filter((element) => {
      return arr2.includes(element);
    });
  
    return common;
  }
  console.log(commonElements(['a', 'b', 'c'], ['c', 'a'])); // ['a', 'c']
  console.log(commonElements(['cat', 'dog', 'mouse', 'fish'], ['dog', 'rat'])); // ['dog']
  console.log(commonElements(['skip', 'jump'], ['swim', 'hop'])); // []  
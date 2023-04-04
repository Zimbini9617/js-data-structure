let phrase = "that's all folks";
console.log(phrase[phrase.length]);
console.log(phrase[phrase.length - 1]);
console.log(phrase[phrase.length - 2]);

const i = 9;
const char = phrase[i];
console.log(char);
console.log(phrase.indexOf(char));
console.log(phrase.slice(2, 8));

console.log("abcdefg".slice(1, 3));
console.log("abcdefg".slice(2));
console.log("abcdefg".slice(4));
console.log("abcdefg".slice(2, -1));
console.log("abcdefg".slice(2, -2));
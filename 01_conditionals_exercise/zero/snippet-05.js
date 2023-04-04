// snippet 0-5
let sentence = "roger that";

if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t");
} else {
  console.log("does not end in t");
}

if (sentence.length <= 4) {
  console.log("short");
} else {
  console.log("long");
}
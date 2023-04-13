const quiz = document.getElementById('quiz');
const results = document.getElementById('results');

quiz.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the form from submitting

  const answers = {
    q1: 'b',
    q2: 'd',
    q3: 'c'
  };
  let score = 0;

  // check answer for question 1
  if (quiz.q1.value === answers.q1) {
    results.innerHTML += "<p>Question 1: Correct!</p>";
    score++;
  } else {
    results.innerHTML += "<p>Question 1: Wrong. The correct answer is b) N Mandela.</p>";
  }

  // check answer for question 2
  if (quiz.q2.value === answers.q2) {
    results.innerHTML += "<p>Question 2: Correct!</p>";
    score++;
  } else {
    results.innerHTML += "<p>Question 2: Wrong. The correct answer is d) 11.</p>";
  }

  // check answer for question 3
  if (quiz.q3.value === answers.q3) {
    results.innerHTML += "<p>Question 3: Correct!</p>";
    score++;
  } else {
    results.innerHTML += "<p>Question 3: Wrong. The correct answer is c) C Ramaphosa.</p>";
  }

  // display final score
  results.innerHTML += "<p>You scored " + score + " out of 3.</p>";
});

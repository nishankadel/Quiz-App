const quizData = [
  {
    question: "What is the developer name ?",
    a: "Bibek Pradhan",
    b: "Suresh Karkey",
    c: "Nishan Kadel",
    d: "Bsaal Karki",
    correct: "c",
  },

  {
    question: "What is the age developer ?",
    a: "12",
    b: "21",
    c: "24",
    d: "42",
    correct: "b",
  },

  {
    question: "What is the favourite code editor of developer ?",
    a: "VS code",
    b: "Sublime text",
    c: "Bracket",
    d: "Notepad ++",
    correct: "a",
  },

  {
    question: "What is the developer's favourite language ?",
    a: "Python",
    b: "JavaScript",
    c: "Java",
    d: "both a & b",
    correct: "d",
  },

  {
    question: "Where do developer live ?",
    a: "USA",
    b: "Canada",
    c: "Spain",
    d: "Nepal",
    correct: "d",
  },
];

let currentQuiz = 0;
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const button = document.getElementById("button");

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();



button.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("No more questions left!");
  }
});

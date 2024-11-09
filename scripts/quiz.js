const questions = [
  {
      question: "Quais linguagens são permitidas na Modalidade Programação da OBI?",
      options: [
          "C, Java, Ruby, JavaScript",
          "C, C++, Java, Python, JavaScript",
          "C#, Python, Java",
          "PHP, JavaScript, Python"
      ],
      answer: "C, C++, Java, Python, JavaScript"
  },
  {
      question: "Qual linguagem é mais indicada para tarefas que exigem alto desempenho e manipulação eficiente de memória?",
      options: [
          "JavaScript",
          "C",
          "Python",
          "Java"
      ],
      answer: "C"
  },
  {
      question: "Quais bibliotecas podem ser usadas para entrada e saída na linguagem C++?",
      options: [
          "std::cin, std::cout, scanf, printf",
          "input(), print()",
          "getchar(), putchar()",
          "Scanner, System.out.println"
      ],
      answer: "std::cin, std::cout, scanf, printf"
  },
  {
      question: "Qual é a extensão de arquivo padrão para programas escritos em Java?",
      options: [
          ".cpp",
          ".java",
          ".py",
          ".c"
      ],
      answer: ".java"
  },
  {
      question: "Qual função é usada para entrada de dados em Python?",
      options: [
          "input()",
          "scanf()",
          "cin()",
          "getchar()"
      ],
      answer: "input()"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const question = questions[currentQuestionIndex];

  questionElement.textContent = question.question;
  optionsElement.innerHTML = '';  

  question.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => checkAnswer(option);
      optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
      score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';

  scoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz").style.display = 'block';
  document.getElementById("result").style.display = 'none';
  loadQuestion();
}

// Iniciar o quiz quando a página for carregada
window.onload = loadQuestion;

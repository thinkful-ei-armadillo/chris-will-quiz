'use strict'; 
/* global $ */


const QUESTIONS = [
  {
    question: 'Buy the ticket, take the ride',
    correct: 'Hunter S. Thompson',
    answers: ['Hunter S. Thompson', 'Joseph Heller', 'Ernest Hemingway', 'Henry David Thoreau']
  },
  {
    question: 'We are what we pretend to be, so we must be careful about what we pretend to be',
    correct: 'Kurt Vonnegut',
    answers: ['Ralph Waldo Emerson', 'H.G. Wells', 'Sir Arthur Conan Doyle', 'Kurt Vonnegut']
  },
  {
    question: 'I love deadlines.  I like the whooshing sound they make as they fly by',
    correct: 'Douglas Adams',
    answers: ['Philip Roth', 'J.K. Rowling', 'Douglas Adams', 'William Shakespeare']
  },
  {
    question: 'You can get all A\'s and still flunk life',
    correct: 'Walker Percy', 
    answers: ['Herman Melville', 'Walker Percy', 'Tom Wolfe', 'Fyodor Dostoevsky']
  },
  {
    question: 'The secret of getting ahead is getting started.',
    correct: 'Mark Twain',
    answers: ['George Orwell', 'Mark Twain', 'Henry Miller', 'Ken Kesey']
  } 
];


const STORE = {
  question: 0,
  correct: 0,
  view: 'start'
};

function questionCounter() {
  STORE.question++;
}

function correctAnswers() {
  STORE.correct++;
}


function generateStartHtmlString(){
  return `<section id="js-start-page">
    <h1 id='title'>Famous Literary Figures: What Do They Know? Do They Know Things?</h1>
    <input type='submit' value="Let's find out!" id="js-start-button">
</section>`;
}

function generateQuestionsHTML() {
  let currentQuestion = QUESTIONS[STORE.question]; 
  return `<section class='questions js-questions-page'>
  <form id='questionForm'>
    <fieldset name='questionList'>
    <legend></legend>
    <h1 id='question'>What famous author said: <br><br> "${currentQuestion.question}"?</h1>
    <label>
      <input class="answer" type="radio" name="option" required></input>
      <span>${currentQuestion.answers[0]}</span>
    </label><br>

    <label>
      <input class="answer" type="radio" name="option" required></input>
      <span>${currentQuestion.answers[1]}</span>
    </label><br>

    <label>
      <input class="answer" type="radio" name="option" required></input>
      <span>${currentQuestion.answers[2]}</span>
    </label><br>

    <label>
      <input class="answer" type="radio" name="option" required></input>
      <span>${currentQuestion.answers[3]}</span>
    </label><br><br>
  <input type='submit' value='submit' id="js-submit-button">
  </fieldset>
</form>
`;
}

function generateCorrectResultsHTML() {
  return `
  <section class='correct-results js-results-page'>
      <h1>Correct! Good job!</h1>
      <img class="animated-gif" src="https://media.giphy.com/media/t64o8WukSJwqY/giphy.gif" alt='correct answer gif'><br>
      <!-- progress/results -->
      <span>So far you have answered ${STORE.correct} / ${STORE.question} correctly.</span><br><br>
      <!-- maybe add link to happy picture/gif here -->
      <input type='submit' value='Next' id='js-next-button'>
  </section>`;
}

function generateIncorrectResultsHTML() { 
  return `
    <section class='wrong-results js-results-page'>
      <h1>Sorry! Wrong Answer.</h1>
      <img class="animated-gif" src="https://media.giphy.com/media/XK20MK6qLpf9K/giphy.gif" alt='wrong answer gif'><br>
      <h2>The answer was ${QUESTIONS[STORE.question-1].correct}</h2>
      <!-- progress/results -->
      <span>So far you have answered ${STORE.correct} / ${STORE.question} correctly.</span><br><br>
      <!-- maybe add link to sad picture/gif here -->
      <input type='submit' value='Next' id='js-next-button'>
    </section>`;
}


function generateFinalPageHTML() {
  if (STORE.correct === 5) {
    return `
    <section class='final js-final-page'>
      <h1>You scored ${STORE.correct} out of 5</h1>
      <img class="animated-gif" src="https://media.giphy.com/media/vIouFhdM5DDzi/giphy.gif" alt='final page gif for perfect score'><br>
      <input type='submit' value='Try Again' id='js-reset-button'>
    </section>`;
  } else if (STORE.correct >= 3) {
    return `
    <section class='final js-final-page'>
      <h1>You scored ${STORE.correct} out of 5</h1>
      <img class="animated-gif" src= "https://media.giphy.com/media/3ohuAxV0DfcLTxVh6w/giphy.gif" alt='final page gif for mediocre score'><br>
      <input type='submit' value='Try Again' id='js-reset-button'>
    </section>`;
  } else {
    return `
    <section class='final js-final-page'>
      <h1>You scored ${STORE.correct} out of 5</h1>
      <img class="animated-gif" src="https://media.giphy.com/media/4YY4DnqeUDBXNTcYMu/giphy.gif" alt='gif for terrible performance'><br>
      <input type='submit' value='Try Again' id='js-reset-button'>
    </section>`;
  }
}


function renderQuizPages() {
  if (STORE.view === 'start') {
    $('.container').html(generateStartHtmlString());
  } else if (STORE.view === 'final') {
    $('.container').html(generateFinalPageHTML());
  } else if (STORE.view === 'question') {
    $('.container').html(generateQuestionsHTML());
  } else if (STORE.view === 'correct') {
    $('.container').html(generateCorrectResultsHTML()); 
  } else if (STORE.view === 'incorrect') {
    $('.container').html(generateIncorrectResultsHTML()); 
  }
}

function checkAnswer() {
  let userAnswer = $('input:checked').siblings('span').text(); 
  let correctAnswer = QUESTIONS[STORE.question].correct; 
  if (userAnswer === correctAnswer) { 
    STORE.view = 'correct';
    correctAnswers(); 
  } else {
    STORE.view = 'incorrect'; 
  }
}


function handleStartButton() {
  $('.container').on('click', '#js-start-button', function() {
    STORE.view = 'question'; 
    renderQuizPages(); 
  });
}

function handleSubmitButton() {
  $('.container').on('submit', '#questionForm', function() { 
    checkAnswer(); 
    questionCounter(); 
    renderQuizPages();
  });
}

function handleNextButton() {
  $('.container').on('click', '#js-next-button', function() {
    const currentQuestionCount = STORE.question;
    if (currentQuestionCount === 5) { 
      STORE.view = 'final';
      renderQuizPages();
    } else {
      STORE.view = 'question';
      renderQuizPages();
    }
  });
}


function handleResetButton() {
  $('.container').on('click', '#js-reset-button', function() {
    STORE.view = 'start';
    STORE.question = 0; 
    STORE.correct = 0; 
    renderQuizPages();
  });
}


function handleQuizApp() {
  renderQuizPages();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleResetButton();
}


$(handleQuizApp);



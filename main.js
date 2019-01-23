'use strict'; 
/* global $ */


// static container of questions, correct answers, and possible answers stored in Array of objects
const QUESTIONS = [
  {
    question: 'Buy the ticket, take the ride.',
    correct: 'Hunter S. Thompson',
    answers: ['Hunter S. Thompson', 'Joseph Heller', 'Ernest Hemingway', 'Henry David Thoreau']
  },
  {
    question: 'We are what we pretend to be, so we must be careful about what we pretend to be.',
    correct: 'Kurt Vonnegut',
    answers: ['Ralph Waldo Emerson', 'H.G. Wells', 'Sir Arthur Conan Doyle', 'Kurt Vonnegut']
  },
  {
    question: 'I love deadlines.  I like the whooosing sound they make as they fly by.',
    correct: 'Douglas Adams',
    answers: ['Philip Roth', 'J.K. Rowling', 'Douglas Adams', 'William Shakespeare']
  },
  {
    question: 'You can get all A\'s and still flunk life.',
    correct: 'Walker Percy', 
    answers: ['Herman Melville', 'Walker Percy', 'Tom Wolfe', 'Fyodor Dostoevsky']
  },
  {
    question: 'The secret of getting ahead is getting started.',
    correct: 'Mark Twain',
    answers: ['George Orwell', 'Mark Twain', 'Henry Miller', 'Ken Kesey']
  } 
];

// DOM container to store question number and correct answers count. Also store key:value for view for rendering?
const STORE = {
  question: 0,
  correct: 0,
  view: 'start'
};
// console.log(STORE.view); // returns start

// ================ FUNCTIONS TO MANIPULATE VALUES IN STORE =============

// function used ONLY to increment question count
function questionCounter() {
  STORE.question++;
}

// function used ONLY to increment correct answer count
function correctAnswers() {
  STORE.correct++;
}


// ================ HTML TEMPLATE GENERATORS =========================
// template generators (functions that output new HTML strings based on data passed in)

// generate template for first/starting page (syntax error fixed)
function generateStartHtmlString(){
  return `<section id="js-start-page">
    <h1>Quiz Time</h1>
    <h2>Are you ready?</h2>
    <button id="js-start-button">Start Quiz</button>
</section>`;
}


// generate template for questions 
// fixed form to display properly & fixed button type error
function generateQuestionsHTML() {
  let currentQuestion = QUESTIONS[STORE.question]; 
  return `<section class='questions js-questions-page'>
  <form>
  <fieldset>
    <h2 id='question'>Who said: "${currentQuestion.question}"</h2><hr>

    <label>
      <input class="answer" type="radio" name="option" checked></input>
      <span>${currentQuestion.answers[0]}</span>
    </label><br>

    <label>
      <input class="answer" type="radio" name="option"></input>
      <span>${currentQuestion.answers[1]}</span>
    </label><br>

    <label>
      <input class="answer" type="radio" name="option"></input>
      <span>${currentQuestion.answers[2]}</span>
    </label><br>

    <label>
      <input class="answer" type="radio" name="option"></input>
      <span>${currentQuestion.answers[3]}</span>
    </label><br>

  </fieldset>  
  <button type=button id="js-submit-button">Submit</button>
</form>
`;
}

// generate template for user answering correctly
// 'Form submission canceled because the form is not connected error.. issues with button?
function generateCorrectResultsHTML() {
  return `
  <section class='correct-results js-results-page'>
      <h2>Correct! Good job!</h2>
      <!-- maybe add link to happy picture/gif here -->
      <button type=button id='js-next-button'>Next Question</button><hr>
      <!-- progress/results -->
      <span>So far you have ${STORE.correct} / ${STORE.question}.</span>
  </section>`;
}

// generate template for user answering incorrectly
// subtracted indexes by 1 due to questionCounter() incrementing up before generating this template
function generateIncorrectResultsHTML() { 
  return `
    <section class='wrong results js-results-page'>
      <h2>Sorry! Wrong Answer.</h2>
      <h4>The answer was ${QUESTIONS[STORE.question-1].correct}</h4>
      <!-- maybe add link to sad picture/gif here -->
      <button type=button id='js-next-button'>Next Question</button><hr>
      <!-- progress/results -->
      <span>So far you have ${STORE.correct} / ${STORE.question}.</span>
    </section>`;
}


// generate template for final page of results
function generateFinalPageHTML() {
  return `
    <section class='final js-final-page'>
      <h2>You scored ${STORE.correct} out of 5</h2>
      <button type='button' id='js-reset-button'>Try Again?</button>
    </section>`;
}

// ================ RENDERING FUNCTIONS =========================
// (functions that read from STORE, call template generators and add HTML to DOM)



// render function with conditions to generate page (fixed render)
function renderQuizPages() {
  if (STORE.view === 'start') {
    console.log('start');
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

// function to check if user answer is correct
function checkAnswer() {
  let userAnswer = $('input:checked').siblings('span').text(); // needed to use text() to turn into string to compare properly
  console.log(userAnswer);
  let correctAnswer = QUESTIONS[STORE.question].correct; 
  console.log(correctAnswer);
  if (userAnswer === correctAnswer) { // conditional check of user answer vs stored correct value
    STORE.view = 'correct';
    correctAnswers(); // increment STORE.correct count
  } else {
    STORE.view = 'incorrect'; 
  }
}


// ====================== EVENT HANDLERS ==============================
// (event listerners that get user input, update STORE, then call renderers)

// start page button event listener
function handleStartButton() {
  $('.container').on('click', '#js-start-button', function() {
    STORE.view = 'question'; // change view to questions on start click
    renderQuizPages(); // render quiz to check all conditions to render appropriate page/view
  });
}


// submit button event listener ()
function handleSubmitButton() {
  $('.container').on('click', '#js-submit-button', function() { // fixed DOM targeting
    checkAnswer(); // invoke function to determine if answer is correct to change view to appropriate value (either 'correct' or incorrect')
    questionCounter(); // increment question count after submission 
    renderQuizPages();
  });
}


// event listener to move to next question
function handleNextButton() {
  $('.container').on('click', '#js-next-button', function() {
    console.log('next button ran');
    console.log(STORE.questions); // returns undefined
    const currentQuestionCount = STORE.question;
    console.log(currentQuestionCount); // returns correct question number count value
    if (currentQuestionCount === 5) { 
      STORE.view = 'final';
      renderQuizPages();
    } else {
      STORE.view = 'question';
      renderQuizPages();
    }
  });
  // target next button
  // render() runs and checks STORE.view and load question page[i]
}


// event listener to reset back to start and refresh all back to 0
function handleResetButton() {
  $('.container').on('click', '#js-reset-button', function() {
    STORE.view = 'start'; // change view back to start on click
    STORE.question = 0; // reset to 0 or cant start quiz
    STORE.correct = 0; // reset score back down to 0
    renderQuizPages();
  });
  // target reset button
  // render() run and checks STORE.view and load the start page
}



// function to run everything
function handleQuizApp() {
  renderQuizPages();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleResetButton();
}

// execute on page load
$(handleQuizApp);



// background image - http://www.horizon-advisors.com/wp-content/uploads/Books-on-blue.jpg
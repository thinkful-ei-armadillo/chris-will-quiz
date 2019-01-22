'use strict'; 

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

const STORE = {
  question: 0,
  correct: 0,
  view: 'start', 
};

// question counter function
function questionCounter() {
  STORE.question++;
}

// ========== template generators ============

// generate template for first/starting page
function generateStartPage(){
  return `    
  <div id='js-welcome'>
    <h1>Welcome! Are you ready for our quiz?</h1>
    <h2>This quiz is about ...</h2>
    <button id='js-start-button'>Start Quiz</button>
  </div>`;
} 

// generate template for questions
function generateQuestionsHTML() {
  let currentQuestion = QUESTIONS[STORE.question]; 
  return `<section id='js-questions-page'>
  <form>
      <fieldset>
          <legend>Question ${currentQuestion.question}</legend>
              <input type='radio' 'checked' ${currentQuestion.answers[0]}>  
              <input type='radio' ${currentQuestion.answers[1]}>
              <input type='radio  ${currentQuestion.answers[2]}>
              <input type='radio' ${currentQuestion.answers[3]}>
      </fieldset> 
  </form>

  <button id='js-submit-button'>Submit</button>
</section>`;
}

// generate template for user answering correctly
function generateCorrectResultsHTML() {
  return `
  <section class='results-page'>
      <h2>Correct! Good job!</h2>
      <!-- maybe add link to happy picture/gif here -->
      <button id='js-next-button'>Next Question</button>
      <!-- progress/results -->
      <span>So far you have ${STORE.correct} / ${STORE.question}.</span>
  </section>`;
}

// generate template for user answering incorrectly
function generateIncorrectResultsHTML() { 
  return `
    <section class='results-page'>
      <h2>Sorry! Wrong Answer.</h2>
      <h4>The answer was ${QUESTIONS[STORE.question].correct}</h4>
      <!-- maybe add link to sad picture/gif here -->
      <button id='js-next-button'>Next Question</button>
      <!-- progress/results -->
      <span>So far you have ${STORE.correct} / ${STORE.question}.</span>
    </section>`;
}


// generate template for final page of results
function generateFinalPageHTML() {
  return `<section class='final-page'>
            <h2>You scored ${STORE.correct} out of 5</h2>
            <button id='js-reset-button'>Try Again?</button>
          </section>`;
}


function checkAnswer(userAnswer) {
  if (userAnswer === QUESTIONS[STORE.question].correct) { 
    STORE.view = 'correct';
    STORE.correct++; 
  } 
  else {
    STORE.view = 'incorrect'; 
  }


  function render() {
    if (STORE.view === 'start') {
      $('form').html(generateStartPage());
    } 
    else if (STORE.view === 'final'){
      $('form').html(generateFinalPageHTML()); 
    }
    else if (STORE.view === 'question'){
      generateQuestionsHTML();
    }
    else if (STORE.view === 'correct'){
      generateCorrectResultsHTML(); 
    }
    else{
      generateIncorrectResultsHTML(); 
    }
  }

}

// ========== event handlers ============







// background image - http://www.horizon-advisors.com/wp-content/uploads/Books-on-blue.jpg
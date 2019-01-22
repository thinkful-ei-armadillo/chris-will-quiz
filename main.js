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
}

// question counter function
function questionCounter() {
    STORE.question++;
}

// ========== template generators ============

// generate template for first/starting page
function (){

} 

// generate template for questions
function generateQuestionsHTML() {
  let currentQuestion = QUESTIONS[STORE.question]; 
  return `<section id='js-questions-page'>
  <form>
      <fieldset>
          <legend>Question ${currentQuestionCounter}</legend>
              <input type='radio' checked>  ${currenQuestion.question}1<br>
              <input type='radio'> potential answer 2<br>
              <input type='radio'> potential answer 3<br>
              <input type='radio'> potential answer 4<br>
      </fieldset> 
  </form>

  <button id='js-submit-button'>Submit</button>
</section>`
}

// generate template for user answering correctly
function generateCorrectResultsHTML() {
  return `
  <section class='results-page'>
      <h2>Correct! Good job!</h2>
      <!-- maybe add link to happy picture/gif here -->
      <button id='js-next-button'>Next Question</button>
      <!-- progress/results -->
      <span>So far you have ${score} / ${questionNumber}.</span>
  </section>`
  }

// generate template for user answering incorrectly
function generateIncorrectResultsHTML() { 
  return `
    <section class='results-page'>
      <h2>Sorry! Wrong Answer.</h2>
      <h4>The answer was ${correctAnswer}</h4>
      <!-- maybe add link to sad picture/gif here -->
      <button id='js-next-button'>Next Question</button>
      <!-- progress/results -->
      <span>So far you have ${score} / ${questionNumber}.</span>
    </section>`
}


// generate template for final page of results
function generateFinalPageHTML() {
  return `<section class='final-page'>
            <h2>You scored ${correctAnswerscounter} out of 10</h2>
            <button id='js-reset-button'>Try Again?</button>
          </section>`
}


function checkAnswer(userAnswer) {
  if (userAnswer === QUESTIONS[i].correct) { 
    STORE.view = 'correct';
    STORE.correct++; 
  } 
  else {
    STORE.view = 'incorrect' 
  }


function render() {
  if (STORE.view = 'start') {
    $('form').html(generateStartPage());
  } 
  else if (STORE.view = 'final'){
    $('form').html(generateFinalPageHTML()); 
  }
  else if (STORE.view = 'question'){
      generateGenerateQuestionsHTML();
  }
  else if (STORE.view = 'correct')
    generateCorrectResultsHTML(); 
  }
  else{
    generateIncorrectResultsHTML(); 
  }




// ========== event handlers ============







// background image - http://www.horizon-advisors.com/wp-content/uploads/Books-on-blue.jpg
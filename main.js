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

let currentQuestionCounter = 0; 
let correctAnswerscounter = 0; 

// question counter function
function questionCounter() {
    currentQuestionCounter++;
}

// increment correct answer function
if (userAnswer === correctAnswer) { // pseudocode
    correctAnswerscounter++;
}




// ========== template generators ============

// generate template for first/starting page
function (){

} 

// generate template for questions
function generateQuestionsHTML() {
  return `<section id='js-questions-page'>
  <form>
      <fieldset>
          <legend>Question ${currentQuestionCounter}</legend>
              <input type='radio' checked>  ${questions}1<br>
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

// ========== Rendering functions ============
// only place to use .html()
// ONLY PLACE TO CHANGE THE DOM.

// create function to check and render the proper HTML template
function checkAnswer(userAnswer) {
  if (userAnswer === QUESTIONS[i].correct) {
    const correct = 
    $('form').html(generateCorrectResultsHTML(correct));
  } else {
    const incorrect =
    $('form').html(generateCorrectResultsHTML(incorrect));
}


// function render(state) {
//   if () {
//     // change DOM to reflect it
//     // generateScorePage();
//   } else {

//   }
// }




// ========== event handlers ============







// background image - http://www.horizon-advisors.com/wp-content/uploads/Books-on-blue.jpg
//quiz questions
var questions = [
  {
    title: 'Inside which HTML element do we put the JavaScript?',
    choices: ['scripting', 'script', 'js', 'javascript'],
    answer: 'script',
  },
  {
    title:
      'Which of the following function of String object combines the text of two strings and returns a new string?',
    choices: ['add( )', 'concat( )', ' merge( )', 'append( )'],
    answer: 'concat( )',
  },

  {
    title: 'Where is the correct place to insert a JavaScript?',
    choices: [
      'The <head> section',
      'The <body> section',
      'Both the <head> section and the <body> section are correct',
    ],
    answer: 'Both the <head> section and the <body> section are correct',
  },
  {
    title: 'How do you create a function in JavaScript?',
    choices: [
      'function myFunction()',
      'function:myFunction()',
      'function = myFunction()',
    ],
    answer: 'function = myFunction()',
  },
  {
    title:
      'Which of the following function of an array object adds and/or removes elements from an array?',
    choices: ['toSource( )', 'sort( )', 'unshift( )', 'splice( )'],
    answer: 'splice( )',
  },
]
//score and timer
var score = 0
var currentQuestionIndex = 0
var timeLeft = 0
var timer
var questionsDiv = document.getElementById('questions')
var choicesDiv = document.getElementById('questionChoices')
var wrongFeedback = document.getElementById('wrongFeedback')
var correctFeedback = document.getElementById('correctFeedback')

function beggin() {
  timeLeft = 75
  document.getElementById('timeLeft').innerHTML = timeLeft
  console.log('clicked start button')

  timer = setInterval(handleTimer, 1000)

  questionsDiv.removeAttribute('class')

  displayQuestions()
}

function handleTimer() {
  timeLeft--
  document.getElementById('timeLeft').innerHTML = timeLeft

  if (timeLeft <= 0) {
    // fire off end quiz function
  }
}

function displayQuestions() {
  var currentQuestion = questions[currentQuestionIndex]
  console.log(currentQuestion)

  var questionTitle = document.getElementById('questionTitle')
  questionTitle.textContent = currentQuestion.title

  choicesDiv.innerHTML = ''

  currentQuestion.choices.forEach(function (choice) {
    var choiceButton = document.createElement('button')
    choiceButton.setAttribute('class', 'choice')
    choiceButton.setAttribute('value', choice)

    choiceButton.textContent = choice

    choicesDiv.append(choiceButton)

    choiceButton.onclick = handleQuestionClick
  })
}

function handleQuestionClick() {
  // testing if the choice the user choice is wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    timeLeft -= 10

    if (timeLeft < 0) {
      timeLeft = 0
    }
    wrongFeedback.removeAttribute('class')
    setTimeout(function () {
      wrongFeedback.setAttribute('class', 'hide')
    }, 2000)
  } else {
    correctFeedback.removeAttribute('class')
    setTimeout(function () {
      correctFeedback.setAttribute('class', 'hide')
    }, 2000)
  }

  currentQuestionIndex++
  console.log('currentQestionIndex', currentQuestionIndex)

  if (currentQuestionIndex === questions.length) {
    // fire off end quiz function
  } else {
    displayQuestions()
  }
}

let startBtn = document.getElementById('start-button')

startBtn.onclick = beggin

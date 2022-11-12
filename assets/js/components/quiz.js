import { safetyQuestions, hazardQuestions } from './questions.js';

export const quiz = () => {
  let questionNumber = 1;
  let playerScore = 0;
  let wrongAttempt = 0;
  let indexNumber = 0;
  let questions;
  let btnId;
  let scoreWrapper;
  let shuffledQuestions = []; //empty array to hold shuffled selected questions

  const resetBtn = document.querySelector('.reset-btn');
  const nextBtn = document.querySelector('.next-btn');
  const quizContainer = document.querySelector('.game-quiz-container');

  // unchecking all radio buttons for next question(can be done with map or foreach loop also)
  const unCheckRadioButtons = () => {
    const options = document.getElementsByName('option');

    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  };

  //sets options background back to null after display the right/wrong colors
  const resetOptionBackground = () => {
    const options = document.getElementsByName('option');

    options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = '';
    });
  };

  // function for when all questions being answered
  const handleEndGame = () => {
    let remark = null;
    let remarkColor = null;

    // condition check for player remark and remark color
    if (playerScore <= 3) {
      remark = 'Bad Grades, Keep Practicing.';
      remarkColor = '#DFCCCC';
    } else if (playerScore >= 4 && playerScore < 7) {
      remark = 'Average Grades, You can do better.';
      remarkColor = 'orange';
    } else if (playerScore >= 7) {
      remark = 'Excellent, Keep the good work going.';
      remarkColor = '#79F3DB';
    }
    const playerGrade = (playerScore / 10) * 100;

    //data to display to score board
    document.querySelector('.remarks').innerHTML = remark;
    document.querySelector('.remarks').style.color = remarkColor;
    document.querySelector('.grade-percentage').innerHTML = playerGrade;
    document.querySelector('.wrong-answers').innerHTML = wrongAttempt;
    document.querySelector('.right-answers').innerHTML = playerScore;
    document.querySelector(`#${btnId}`).style.display = 'flex';
  };

  const handleQuestions = (btnId) => {
    if (btnId === 'score-safety') {
      questions = safetyQuestions;
    } else {
      questions = hazardQuestions;
    }

    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)];
      if (!shuffledQuestions.includes(random)) {
        shuffledQuestions.push(random);
      }
    }
  };

  // function for displaying next question in the array to dom
  const NextQuestion = (index, btnId) => {
    scoreWrapper = document.getElementById(btnId);

    if (scoreWrapper) {
      scoreWrapper.style.display = 'none';
    }

    handleQuestions(btnId);
    const currentQuestion = shuffledQuestions[index];

    if (quizContainer) {
      document.querySelector('.question-number').innerHTML = questionNumber;
      document.querySelector('.player-score').innerHTML = playerScore;
      document.querySelector('.display-question').innerHTML =
        currentQuestion.question;
      document.querySelector('#option-one-label').innerHTML =
        currentQuestion.optionA;
      document.querySelector('#option-two-label').innerHTML =
        currentQuestion.optionB;
      document.querySelector('#option-three-label').innerHTML =
        currentQuestion.optionC;
      document.querySelector('#option-four-label').innerHTML =
        currentQuestion.optionD;
    }
  };

  const checkForAnswer = () => {
    const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
    const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
    const options = document.getElementsByName('option'); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null;

    options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
        //get's correct's radio input with correct answer
        correctOption = option.labels[0].id;
      }
    });

    //checking to make sure a radio input has been checked or an option being chosen
    if (
      options[0].checked === false &&
      options[1].checked === false &&
      options[2].checked === false &&
      options[3].checked == false
    ) {
      document.getElementById('option-modal').style.display = 'flex';
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = '#79F3DB';
        playerScore++;
        indexNumber++;
        //set to delay question number till when next question loads
        setTimeout(() => {
          questionNumber++;
        }, 1000);
      } else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id;

        document.getElementById(wrongLabelId).style.backgroundColor = '#DFCCCC';
        document.getElementById(correctOption).style.backgroundColor = '#79F3DB';
        wrongAttempt++;
        indexNumber++;
        //set to delay question number till when next question loads
        setTimeout(() => {
          questionNumber++;
        }, 1000);
      }
    });
  };

  //closes score modal and resets game
  if (resetBtn) {
    btnId = resetBtn.getAttribute('data-id');

    resetBtn.addEventListener('click', (e) => {
      btnId = e.target.getAttribute('data-id');

      questionNumber = 1;
      playerScore = 0;
      wrongAttempt = 0;
      indexNumber = 0;
      shuffledQuestions = [];

      NextQuestion(indexNumber, btnId);
      document.getElementById(btnId).style.display = 'none';
    });
  }

  // next question
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      checkForAnswer();
      unCheckRadioButtons();
      //delays next question displaying for a second
      setTimeout(() => {
        if (indexNumber <= 9) {
          NextQuestion(indexNumber);
        } else {
          handleEndGame();
        }
        resetOptionBackground();
      }, 1000);
    });
  }

  NextQuestion(indexNumber, btnId);

};

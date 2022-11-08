class Quiz {
    constructor(questions, reward) {
        this.reward= reward;
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score +=this.reward;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
var fianlScore = 0;
function displayQuestion(count, quizElement, hasNext, next) {
    QuizNumber(count);
    if (quizElement.isEnded()) {
        fianlScore += quizElement.score;
        if(hasNext){
            clearInterval(quizTimer1);
            countDown2(15);
            displayQuestion(2, quiz2, false, null);
        }
        else{
            clearInterval(quizTimer2);
            countDown3(8);
            displayLogoQuestion();
        }
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quizElement.getQuestionIndex().text;

        // show options
        let choices = quizElement.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i], count, quizElement, hasNext, next);
        }

        showProgress(quizElement);
    }
};

function displayLogoQuestion(){
    QuizNumber(3);
    if (quiz3.isEnded()) {
        fianlScore += quiz3.score;
        showScores();
    }else{
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = `<img src='${quiz3.getQuestionIndex().text}' style='width:50%; display:block; margin-left:auto; margin-right:auto'></img>`;

        // show options
        let choices = quiz3.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess2("btn" + i, choices[i]);
        }
        showProgress(quiz3);
    }
}

// Quiz Number
function QuizNumber(Count){
    let quizNumber = document.getElementById("quiz-num");
    quizNumber.innerHTML = `ROUND- ${Count}`;
}

// GUESS ANSWER
function guess(id, guess, count, quizElement, hasNext, next) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quizElement.guess(guess);
        displayQuestion(count, quizElement, hasNext, next);
    }
};
function guess2(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess(guess);
        displayLogoQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress(quizElement) {
    let currentQuestionNumber = quizElement.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `QUESTION ${currentQuestionNumber} `;
};


// SHOW SCORES
function showScores() {
    var passed="Congratulations,You have been provisionally alloted!",result="";
    if(fianlScore > 9.5){
        result="At Vellore Campus";
    }else if(fianlScore > 7.5){
        result="At Chennai Campus";
    }else if(fianlScore > 6.5){
        result="At Amravati Campus";
    }
    else{
        passed="Mission Failed! Not admitted";
    }
    let quizEndHTML =
        `
    <h1 style="color: black;background-color: pink"><b>QUIZ COMPLETED</b></h1>
    <h2 class='score'> You Have scored: ${fianlScore}</h2>
    <h2 class='score'> ${passed}</h2>
    <h2 class='score'> ${result}</h2>
  
    `;
    let quizElemnt = document.getElementById("quiz");
    quizElemnt.innerHTML = quizEndHTML;
};

// create questions here
let questions1 = [
    new Question(
        "Grand Central Terminal, Park Avenue, New York is the world's", ["largest railway station", "highest railway station", "longest railway station", "None of the above"], "largest railway station"
    ),
    new Question(
        "Entomology is the science that studies", ["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks"], "Insects"
    ),
    new Question(
        "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of", ["Asia", "Africa", "Europe", "Australia"], "Africa"
    ),
    new Question(
        "Garampani sanctuary is located at", ["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok,Sikkim"], "Diphu, Assam"
    ),
    new Question(
        "For which of the following disciplines is Nobel Prize awarded?", ["Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "	All of the above"], "All of the above"
    ),
    new Question(
        "Hitler party which came into power in 1933 is known as", ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"], "Nazi Party"
    ),
    new Question(
        "FFC stands for", ["Foreign Finance Corporation", "Film Finance Corporation", "Federation of Football Council", "None of the above"], "Film Finance Corporation"
    ),
    new Question(
        "Fastest shorthand writer was", ["Dr. G. D. Bist", "J.R.D. Tata", "J.M. Tagore", "Khudada Khan"], "Dr. G. D. Bist"
    ),
    new Question(
        "Epsom (England) is the place associated with", ["Horse Racing", "Polo", "Shooting", "Snooker"], "Horse Racing"
    ),
    new Question(
        "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in", ["1967", "1968", "1958", "1922"], "1967"
    )
];

let questions2 = [
    new Question(
      "Golf player Vijay Singh belongs to which country?", ["USA", "Fiji", "India", "UK"], "Fiji"  
    ),
    new Question(
      "First Afghan War took place in", ["1936", "1456", "1947", "1839"], "1839"  
    ),
    new Question(
      "First China War was fought between", ["China and Britain", "China and France", "China and Egypt", "China and Greek"], "China and Britain"  
    ),
    new Question(
      "Each year World Red Cross and Red Crescent Day is celebrated on", ["May 8", "May 18", "June 8", "June 18"], "May 8"  
    ),
    new Question(
      "What is the national animal of India?", ["Tiger", "Cheetah", "Lion", "Elephant"], "Tiger"  
    )
];

let questions3 = [
    new Question(
        "D:/SEM 5/AWD/NAVEEN/QUIZZZ/images/img1.JPG", ["Instagram", "Twitter", "Snapchat", "Telegram"], "Twitter"
    ),
    new Question(
        "D:/SEM 5/AWD/NAVEEN/QUIZZZ/images/img2.JPG", ["Starbucks", "Star-Wars", "Gucci", "Adibi"], "Starbucks"
    ),
    new Question(
        "D:/SEM 5/AWD/NAVEEN/QUIZZZ/images/img3.PNG", ["Pizza-hut", "Domino's", "KFC", "mcdonald's"], "mcdonald's"
    ),
    new Question(
        "D:/SEM 5/AWD/NAVEEN/QUIZZZ/images/img4.PNG", ["Insta", "Meta", "FaceBook", "Youtube"], "Meta"
    ),
    new Question(
        "D:/SEM 5/AWD/NAVEEN/QUIZZZ/images/img5.PNG", ["BMW", "Crysta", "Ferrari", "Chevrolet"], "Ferrari"
    )
];

// INITIALIZE quiz
let quiz1 = new Quiz(questions1, 2);
let quiz2 = new Quiz(questions2, 2);
let quiz3 = new Quiz(questions3, 4)

// display questions
displayQuestion(1, quiz1, true, quiz2);


// Add A CountDown for the Quiz
let counting = document.getElementById("count-down");

var quizTimer1, quizTimer2, quizTimer3;

function countDown1(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer1 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer1);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME LEFT ${min} : ${sec}`;
        }
    }, 1000);
}

function countDown2(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer2 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer2);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME LEFT ${min} : ${sec}`;
        }
    }, 1000);
}

function countDown3(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer3 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer3);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME LEFT ${min} : ${sec}`;
        }
    }, 1000);
}
countDown1(15);
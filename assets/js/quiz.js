/* get the quiz question when the dom content is loaded */

document.addEventListener("DOMContentLoaded", function () {
    getQuizQuestions();
});

/* store the variables by getting their respective Ids */

const welcome = document.getElementById("welcome");
const checkInput = document.getElementById("quiz_username");
const quizButton = document.getElementById("quiz_button");
const modalBox = document.getElementById("username");
const nextButton =document.getElementById("next_button");
const quizSection =document.getElementById("quiz") ; 
const navigate = document.getElementById("back_to_home");
const timeoutBox = document.getElementById("timeout_box");

const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

/**
 * This quiz contains a total of 14 questions
 * which will be randomised to show 8 questions
 */

const allQuizQuestions = [
    {
        question: "At the end of which season did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2012",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "Who is currently the longest serving manager in the Premier League in their current club?", 
        optionA: "A - David Moyes", 
        optionB: "B - Jurgen Klopp",
        optionC: "C - Pep Guardiola",
        optionD: "D - Brenden Rodgers",
        correctAnswer: "B"
    },

    {
        question: "Who has the second highest record number of goals from midfield in the Premier League?", 
        optionA: "A - Yaya Toure", 
        optionB: "B - David Beckham",
        optionC: "C - Matt Le Tissier",
        optionD: "D - Paul Scholes",
        correctAnswer: "A"
    },

    {
        question: "Who has the highest number of assits in the premier league?", 
        optionA: "A - Thierry Henry", 
        optionB: "B - Steven Gerrard",
        optionC: "C - Ryan Giggs",
        optionD: "D - Cesc Fabregas",
        correctAnswer: "C"
    },

    {
        question: "When year did Arsene Wenger make his managerial debut?", 
        optionA: "A - 1994", 
        optionB: "B - 1998",
        optionC: "C - 1996",
        optionD: "D - 1993",
        correctAnswer: "C"
    },

    {
        question: "When season did Alan Shearer set the record for the highest premier league goals in a season?", 
        optionA: "A - 1993", 
        optionB: "B - 1996",
        optionC: "C - 2000",
        optionD: "D - 1994",
        correctAnswer: "D"
    },

    {
        question: "What player has the record amount of red cards in the premier league?", 
        optionA: "A - Duncan Ferguson", 
        optionB: "B - Patrick Viera",
        optionC: "C - Roy Keane",
        optionD: "D - Richard Dunne",
        correctAnswer: "A"
    },

    {
        question: "What player the highest amount of premier league appearances?", 
        optionA: "A - Ryan Giggs", 
        optionB: "B - James Milner",
        optionC: "C - Frank Lampard",
        optionD: "D - Gareth Barry",
        correctAnswer: "D"
    },
    {
        question: "Who has won the most premier league titles?", 
        optionA: "A - Dennis Irwin", 
        optionB: "B - Ryan Giggs",
        optionC: "C - Paul Scholes",
        optionD: "D - Roy Keane",
        correctAnswer: "B"
    },
    {
        question: "What goalkeeper has the most clean sheets?", 
        optionA: "A - David Seaman", 
        optionB: "B - Mark Schwarzer",
        optionC: "C - Petr Cech",
        optionD: "D - David James",
        correctAnswer: "D"
    },

    {
        question: "What player the highest amount of premier league appearances?", 
        optionA: "A - Ryan Giggs", 
        optionB: "B - James Milner",
        optionC: "C - Frank Lampard",
        optionD: "D - Gareth Barry",
        correctAnswer: "D"
    }

    {
        question: "Who has had the highest Premier League transfer value?", 
        optionA: "A - Philippe Countinho", 
        optionB: "B - Ousmane Dembele",
        optionC: "C - Harry Maguire",
        optionD: "D - Eden Hazard",
        correctAnswer: "A"
    }

    {
        question: "How much did Cristiano Ronaldo join Real Madrid for?", 
        optionA: "A - £100mill", 
        optionB: "B - £70mill",
        optionC: "C - £80mill",
        optionD: "D - £90mill",
        correctAnswer: "C"
    }

    {
        question: "Who is the most expensive english player in the Premier League?", 
        optionA: "A - Harry Maguire", 
        optionB: "B - Jack Grealish",
        optionC: "C - Jadon Sancho",
        optionD: "D - Kyle Walker",
        correctAnswer: "B"
    }

];
/* Shufling the original questions to display random questions 
* each time the quiz is started */
/*  This shuffling was inspired from https://sebhastian.com/shuffle-array-javascript/ */
const shuffleArray = allQuizQuestions.sort(()=> 0.5 - Math.random());
const quizQuestions = shuffleArray.slice(0,8);
let currentQuestion = 0;
let counter = 75;

/* Hide the username modal after the user has inputted their name */
function hideModal () {
    if (checkInput.value.length>0) {
        modalBox.style.display="none";
        startQuiz();
    }

}

/* redirect user back to the homepage */
/*  This was inspired by https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage */
function redirectPage () {
    return window.location.assign ("index.html");
}

/* display this modal when the user runs out of time */
function showTimeoutModal() {
    timeoutBox.style.display="block";
}

/**  The method is called when the quiz started
 * The progress bar is deafulted to 0 and greets the user and displays the time
 * left to finish the quiz
*/
function startQuiz () {
    document.getElementById("progress-bar").setAttribute("style", `width:${0}%`);
    quizSection.style.display = "block";

    /* The counter was inspired from https://www.w3schools.com/jsref/met_win_setinterval.asp */
    const interval = setInterval(function () {
        welcome.innerHTML = `Hello ${checkInput.value} you have ${counter} seconds left!`;
        counter--;
        if (counter < 15) {
            /* change the timer to red when less than 15 seconds left */
            welcome.style.color = "red"; 
        }
        if (counter === -1) {
            clearInterval(interval);
            /* when the user runs out of time display timeout modal */
            showTimeoutModal();
        }
    }, 1000);

}

/* This function will display questions and options to the user */
function getQuizQuestions () {
    document.getElementById("progress_number").innerHTML=`Question ${currentQuestion+1} of 8 `;
    const questions = quizQuestions [currentQuestion];
    question.innerHTML = "<h1>" + questions.question +" </h1>";
    optionA.innerHTML = "<p class = 'option' id = 'A'>" + questions.optionA + "</p>" ; 
    optionB.innerHTML =  "<p class = 'option' id ='B'>" + questions.optionB + "</p>" ;
    optionC.innerHTML = "<p class = 'option' id = 'C'>" + questions.optionC + "</p>" ;
    optionD.innerHTML = "<p class = 'option' id = 'D'>" + questions.optionD + "</p>" ;

    /* When the user reaches the end of the question change the button to view results */
    if (currentQuestion === 7) {
        document.querySelector("#next_button").innerHTML="View Results";
    } 

    /*  enable the user to select the answers */
    optionA.style.pointerEvents="auto";
    optionB.style.pointerEvents="auto";
    optionC.style.pointerEvents="auto";
    optionD.style.pointerEvents="auto";
    nextButton.setAttribute("disabled" ,"true");

} 

/* This variable stores the number of correct answers by the user */
let totalCorrectAnswer = 0;

/** This function will check the answer and updates the progress bar
 * @param {string} option - This stores the option selected by the user
 **/
function checkAnswer (option) {
    const selectedAnswer = document.getElementById(option);
    const questions = quizQuestions[currentQuestion];
    const correctAnswer = document.getElementById (questions.correctAnswer);

    /* If the selected option is correct change the background colour to green */
    if (selectedAnswer.innerText===correctAnswer.innerText) {
        selectedAnswer.style.backgroundColor="green"; 
        totalCorrectAnswer++;
    }
     /**  If the selected option is incorrect change the background colour to red 
      * and display the correct answerr background as green
     */
    else {
        selectedAnswer.style.backgroundColor="red";
        correctAnswer.style.background="green";
    }

    /*  disable the users from selecting answers if answer is already selected */
    optionA.style.pointerEvents="none";
    optionB.style.pointerEvents="none";
    optionC.style.pointerEvents="none";
    optionD.style.pointerEvents="none";
    nextButton.removeAttribute("disabled");

    /* incrementing this variable to fetch the next question */
    currentQuestion++; 

    /* update the progress of the user based on the number of questions answered */
    const progress= ((currentQuestion)/8)*100;
    document.getElementById("progress-bar").setAttribute("style", `width:${progress}%`);
}

/* This function will fetch the next questions or gets the result if user reaches end of the game */
function nextQuestion () {
    if (currentQuestion===8) {
        getResult(); 
    }
    else {
        getQuizQuestions();
    }
}

 /* This function gathers the result and stores it into local storage to be accessed in results page*/    
 function getResult () {
    const result = (totalCorrectAnswer/8) *100;
    /* store the variable result which can be accessed by another js file */
    /*  The storing of result in local storage was taken from https://stackoverflow.com/questions/17309199/how-to-send-variables-from-one-file-to-another-in-javascript */
    localStorage.setItem("result",result.toString());

    const username = checkInput.value;
    localStorage.setItem("username", username);

    /* redirect user to results page */
    window.location = "results.html";
}

/* event listeners of quiz page */
quizButton.addEventListener("click", hideModal);
navigate.addEventListener("click", redirectPage);
nextButton.addEventListener("click", nextQuestion);
optionA.addEventListener("click", function () { checkAnswer('A'); });
optionB.addEventListener("click", function () { checkAnswer('B'); });
optionC.addEventListener("click", function () { checkAnswer('C'); });
optionD.addEventListener("click", function () { checkAnswer('D'); });




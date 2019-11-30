=================================
VARIABLES
=================================

/* constant variables associated with the DOM */
const url = 'https://restcountries.eu/rest/v2/all';
const homeContainer = document.getElementById("home-container");
const gameContainer = document.getElementById("game-container");
const gameOver = document.getElementById("game-over");
const reset = document.getElementById("reset");
const mode = document.getElementById("mode");
const matchFlagBanner = document.getElementById("attention");
const clickGame = document.getElementsByClassName("game");
const startFlag = document.getElementById("flag-button");
const startCountry = document.getElementById("country-button");
const flag = document.querySelector("#flag img");
const answerItem = document.getElementsByClassName("answer-item");
const answers = Array.from(document.getElementsByClassName("answer-item"));
const questionInfo = document.getElementById("question-count");
const scoreInfo = document.getElementById("score-count");
const scoreComment = document.getElementById("scoreComment");

/* variables for the game set up*/
let currentQuestion = []; //array of 4 first countries sliced from shuffled data for each question
let MatchCountry;

/* variables for the game set up*/
let score = 0;
let questionCount = 0;
const maxQuestions = 20;

console.log(matchFlagBanner);

/* add events listeners */
startFlag.addEventListener("click", function(){
    homeContainer.classList.add("d-none");
    matchFlagBanner.classList.add("d-none");
    gameContainer.classList.remove("d-none");
    reset.classList.remove("d-none");
    mode.classList.remove("d-none");
    fetchApi();
})

mode.addEventListener("click", function(){
    homeContainer.classList.remove("d-none");
    gameContainer.classList.add("d-none");
})

reset.addEventListener("click", function(){
    startGame()
})

/* fetching rest country API */
function fetchApi () {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        let countryData = shuffleData(data); /*defining array variable to the fetched data*/
        
    startGame(countryData);
      })
    
    .catch(err => console.log(err))
    
    pushCurrentQuestion(countryData);
}

function startGame(data) {
  questionCount = 0;
  score = 0;
  pushCurrentQuestion(data);
}


/* function retrieves a random number with Math.random() and through array.sort, it compares two items and sorts their index depending on the result being positive negative or 0. */
function shuffleData (json) {
    return json.sort(() => Math.random() - 0.5);   /*while sorting the array and comparing its items, applying function to return a floating-point, pseudo-random number in the range of 0 and 1: The sole determinant of whether the elements are swapped or not is the return value of the compare function.*/
}

/* function to mix the html answers items which I have created an array from */
function mixItems (arrayItems) {
    return Math.floor(Math.random() * arrayItems.length); /* Math.floor() function returns the largest integer less than or equal to a floating-point, pseudo-random number in the range of array length */
}

/* function to pull question which is an array of the first 4 countries from any array*/
function pushCurrentQuestion(data) {
    if(questionCount >= maxQuestions) {
        gameContainer.classList.add("d-none");
        gameOver.classList.remove("d-none");
    }

    questionCount++;
    questionInfo.innerText = `${questionCount}/${maxQuestions}`;
    scoreInfo.innerText = score;
    currentQuestion = []; /* empty current question array each time this function is called and current question is answered correctly */
    /* calling function to shuffle countryArray each time a current question is pulled */
    currentQuestion.push(...data.slice(0,4));
    
    selectingCountrytoMatch(); /* calling function to select country to match from the current question */
}

/* function to select randomly country to match from the current question array */
function selectingCountrytoMatch() {
    MatchCountry = currentQuestion[mixItems(currentQuestion)]; /* defining an empty variable to a random index of current question array */
/* calling here functions to make the game displayed and after being clicked match verified */
    displayingFlag()
    displayingCountriesName()
    verifyMatch(pushCurrentQuestion);

    console.log(currentQuestion)
    console.log(MatchCountry);
}

/* function to display flag from the MatchCountry variable */
function displayingFlag() {
    flag.src = MatchCountry.flag;
}

/* function to assign a random country name from the current question array to a different answer item */
function displayingCountriesName() {
    mixItems(answers)
    answers[0].innerText = currentQuestion[3].name;
    answers[1].innerText = currentQuestion[2].name;
    answers[2].innerText = currentQuestion[0].name;
    answers[3].innerText = currentQuestion[1].name;
}

/* function to verify match after clicking on each answer item */
function verifyMatch() {
    answers.forEach(answer => { /* for each element of the answers array, we listen to a click and we study its value */
        answer.addEventListener("click", e => {
            let clickedAnswer = e.target;
            let match = clickedAnswer.innerText.toLowerCase() == MatchCountry.name.toLowerCase(); /* define a variable to confirm a match with boolean value between 2 conditions */
            if(match){ /* if match variable is true, alert is displayed */
                Swal.fire("Yaaayy doing amazing! Keep going...").then((result) => {
                    if (result.value) {
                        score++;
                        pushCurrentQuestion(countryData);
                    }
                });  
                        } else Swal.fire(`Ooooops...it is ${MatchCountry.name}.`).then((result) => {
                    if (result.value) {
                        pushCurrentQuestion(countryData);
                    }
                });  ;
          });
        })
    }


function whichAlert (match, country) {
    const defaultAlert = {
        position:'center',
        allowEscapeKey: "false",
        allowOutsideClick: "false",
        timer: 2000
    };
    console.log(defaultAlert)
    if(match) {
        defaultAlert.text = "Yaaayy doing amazing! Keep going...";
        defaultAlert.icon = "success";
    } else {
        defaultAlert.text = `Ooooops...it is ${MatchCountry.name}.`;
        defaultAlert.icon = "error";
    }
}

function showGameOver(questionInfo, scoreComment){
    questionInfo.innerText = `${questionCount}/${maxQuestions}`;
    if(questionInfo.value<=10){
        scoreComment.innerHTML = `
        <h2>Got there!...definitely can do better!<h2>
        <p>Dare to try again and improve this score?<p>`
    } if(questionInfo<=15){
        scoreComment.innerHTML = `
        <h2>WOW very impressive!<h2>
        <p>With more practice, you can beat this great score!<p>`
    } else {
        scoreComment.innerHTML = `
        <h2>Bravooooo you are super smart!<h2>
        <p>Reach the 20/20 or wait for the extreme mode...?<p>`
    }
}
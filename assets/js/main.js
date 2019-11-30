/*
=================================
            VARIABLES
=================================
*/
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

/* variables for the question*/
let countryData;
let currentQuestion = []; //array of 4 first countries sliced from shuffled data for each question
let MatchCountry;

/* variables for the game set up*/
let score = 0;
let questionCount = 0;
const maxQuestions = 20;

/*
=================================
            EVENT LISTENERS
=================================
*/

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
    restart();
})

/*
=================================
            FUNCTIONS
=================================
*/

/**
 *  fetching rest country API
 */
function fetchApi () {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        countryData = shuffleData(data); /*defining array variable to the fetched data*/
        console.log(countryData)
    pushCurrentQuestion();
      })
    
    .catch(err => console.log(err))
}

/**
 * function to shuffle an array containing different json objects of data. 
 * Sorting the array with random numbers which can be positive or negative
 * Compares two items and sorts their index depending on the result being positive negative or 0.
 */
function shuffleData (json) {
    return json.sort(() => Math.random() - 0.5);   
}

/**
 * function to start game with first question and resetting question count and score at 0
 */
function startGame() {
  questionCount = 0;
  score = 0;
  pushCurrentQuestion(shuffleData(countryData));
}

function restart(){
  questionCount = 0;
  score = 0;
  pushCurrentQuestion(shuffleData(countryData));
}

/**
 * function to mix an array of items by using a pseudo-random number in the range of array length
 */
function mixItems (arrayItems) {
    return Math.floor(Math.random() * arrayItems.length); /*  */
}

/**
 * function to push question inside an empty array by slicing the first 4 elements of any array
 * function looks first if game has already reached the maximum number of questions and if it does, hide this container and show game-over container
 * function empties the currentQuestion array from previous question's data
 * function increments questionCount and changes display of questionCount and score
 */
function pushCurrentQuestion() {
    if(questionCount >= maxQuestions) {
        gameContainer.classList.add("d-none");
        gameOver.classList.remove("d-none");
    }

    questionCount++;
    questionInfo.innerText = `${questionCount}/${maxQuestions}`;
    scoreInfo.innerText = score;
    currentQuestion = []; 
    currentQuestion.push(...countryData.slice(0,4));
    
    selectingCountrytoMatch();
}

/**
 * function to select randomly country to match from the current question array
 * integrating mixItems function to get random number from 4 items
 * calling functions to play game with current question to display flag, display countries name and verify match
 */
function selectingCountrytoMatch() {
    MatchCountry = currentQuestion[mixItems(currentQuestion)];

    displayingFlag()
    displayingCountriesName()
    verifyMatch();

    console.log(currentQuestion)
    console.log(MatchCountry);
}

/**
 * function to display flag from the MatchCountry variable
 */
function displayingFlag() {
    flag.src = MatchCountry.flag;
}

/**
 * function to assign a country name from the current question array to a random answer item
 */
function displayingCountriesName() {
    mixItems(answers)
    answers[0].innerText = currentQuestion[3].name;
    answers[1].innerText = currentQuestion[2].name;
    answers[2].innerText = currentQuestion[0].name;
    answers[3].innerText = currentQuestion[1].name;
}

/**
 * function to verify match after clicking on each answer item
 * event listener integrated within a forEach to loop through the answer items
 * displaying different alert depending of the match
 */
function verifyMatch() {
    answers.forEach(answer => { 
        answer.addEventListener("click", e => {
            let clickedAnswer = e.target;
            let match = clickedAnswer.innerText.toLowerCase() == MatchCountry.name.toLowerCase(); 
            if(match){ 
                Swal.fire("Yaaayy doing amazing! Keep going...").then((result) => {
                    console.log(result)
                    if (result.value) {
                        score++;
                        pushCurrentQuestion(shuffleData(countryData));
                    }
                });  
                        } else Swal.fire(`Ooooops...it is ${MatchCountry.name}.`).then((result) => {
                    if (result.value) {
                        pushCurrentQuestion(shuffleData(countryData));
                    }
                });  ;
          });
        })
    }

/**
 * function to create a default alert object which can be used to fire customised alerts called when match verified
 * @param match {boolean}
 */
function whichAlert(match, country) {
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
    return defaultAlert;
}

/**
 * function to add content on game-over container depending of score
 */
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
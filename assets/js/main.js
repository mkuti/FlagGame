/*
=================================
            VARIABLES
=================================
*/
// Constant variables associated with the DOM
const url = 'https://restcountries.com/v3.1/all';
const homeContainer = document.getElementById("home-container");
const matchFlagContainer = document.getElementById("flag-container");
const matchCountryContainer = document.getElementById("country-container");
const gameOver = document.getElementById("game-over");
const reset = document.getElementById("reset");
const mode = document.getElementById("mode");
const matchFlagBanner = document.getElementById("attention");
const startFlag = document.getElementById("flag-button");
const startCountry = document.getElementById("country-button");
const flag = document.querySelector("#flag img");
const answerItem = document.getElementsByClassName("answer-item");
const countryAnswers = Array.from(document.getElementsByClassName("answer-item"));
const countryName = document.getElementById("country-name");
const flagChoices = Array.from(document.getElementsByClassName("choice-item"));
const questionInfo = document.getElementById("question-count");
const countryQuestionInfo = document.getElementById("Countryquestion-count");
const scoreInfo = document.getElementById("score-count");
const countryScoreInfo = document.getElementById("Countryscore-count");
const finalScore = document.getElementById("final-score");
const scoreComment = document.getElementById("scoreComment");

// Variables for the question
let countryData;
let currentQuestion = []; //array of 4 first countries sliced from shuffled data for each question
let MatchCountry;

// Variables for the game set up
let score = 0;
let questionCount = 0;
const maxQuestions = 20;

/*
=================================
            EVENT LISTENERS
=================================
*/

$(".game-btn").click(function(){
    homeContainer.classList.add("d-none")
    matchFlagBanner.parentElement.classList.add("d-none")
    reset.parentElement.classList.remove("d-none");
    reset.parentElement.classList.add("col-6");
    mode.parentElement.classList.remove("d-none");
    mode.parentElement.classList.add("col-6");
    if(this.id === "flag-button"){
        matchFlagContainer.classList.remove("d-none");
        fetchApi();
    } else if(this.id === "country-button"){
        matchCountryContainer.classList.remove("d-none");
        fetchApi();
    } else if(this.id === "mode" || this.id === "start-again"){
        homeContainer.classList.remove("d-none");
        reset.parentElement.classList.add("d-none");
        mode.parentElement.classList.add("d-none");
        matchFlagBanner.parentElement.classList.remove("d-none");
        matchFlagContainer.classList.add("d-none");
        matchCountryContainer.classList.add("d-none");
        gameOver.classList.add("d-none");
        stopGame()
    } else {
        restart(); 
    }
})

/*
=================================
            FUNCTIONS
=================================
*/

/**
 * Fetching rest country API
 * @callback <pushCurrentQuestion>
 */
function fetchApi () {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        countryData = shuffleData(data); /*defining array variable to the fetched data*/
        pushCurrentQuestion();
      })
    
    .catch(err => console.log(err))
}

/**
 * Shuffle array containing different json objects of data. 
 * @param {json} Array of multiple objects
 */
function shuffleData (json) {
    return json.sort(() => Math.random() - 0.5);   
}

/**
 * Start game with first question and resetting question count and score at 0
 * @callback <pushCurrentQuestion>
 */
function restart(){
  questionCount = 0;
  score = 0;
  fetchApi ();
}

/**
 * Stop game to reset questionCount when user go back to mode container
 */
function stopGame(){
    if(homeContainer.style.display = "block"){
       questionCount = 0;
       score = 0;
}
}

/**
 * Mix array of items by using a pseudo-random number in the range of array length
 * @param {array} Array of items
 */
function mixItems (arrayItems) {
    return Math.floor(Math.random() * arrayItems.length); /*  */
}

/**
 * Push question inside an empty array by slicing the first 4 elements of CountryData array
 * @callback <showGameOver>
 * @callback <selectingCountrytoMatch>
 */
function pushCurrentQuestion() {
    if(questionCount >= maxQuestions) {
        matchFlagContainer.classList.add("d-none");
        matchCountryContainer.classList.add("d-none");
        reset.parentElement.classList.add("d-none");
        mode.parentElement.classList.add("d-none");
        gameOver.classList.remove("d-none");
        showGameOver();
    }

    questionCount++;
    questionInfo.innerText = `${questionCount}/${maxQuestions}`;
    countryQuestionInfo.innerText = `${questionCount}/${maxQuestions}`;
    scoreInfo.innerText = score;
    countryScoreInfo.innerText = score;
    currentQuestion = []; 
    currentQuestion.push(...countryData.slice(0,4));
    
    selectingCountrytoMatch();
}

/**
 * Select randomly country to match from the current question array
 * @callback <displayingFlag>
 * @callback <displayingCountriesName>
 * @callback <verifyMatchFlag>
 * @callback <displayingCountryName>
 * @callback <displayingFlags>
 * @callback <verifyMatchCountry>
 */
function selectingCountrytoMatch() {
    MatchCountry = currentQuestion[mixItems(currentQuestion)];
    countryData = countryData.filter(country => country.name.common !== MatchCountry.name);
    
    if(matchFlagContainer.style.display = "block") {
        displayingFlag()
        displayingCountriesName()
        verifyMatchFlag();
    }
    
    if(matchCountryContainer.style.display = "block") {
        displayingCountryName()
        displayingFlags()
        verifyMatchCountry();
    }
}

/*
=================================
            MODE: BY FLAG
=================================
*/
/**
 * Display flag from the MatchCountry variable under Match by flag mode
 */
function displayingFlag() {
    flag.src = MatchCountry.flags.png;
}

/**
 * Assign a country name from the current question array to a random answer item
 */
function displayingCountriesName() {
    countryAnswers[0].innerText = currentQuestion[3].name.common;
    countryAnswers[1].innerText = currentQuestion[2].name.common;
    countryAnswers[2].innerText = currentQuestion[0].name.common;
    countryAnswers[3].innerText = currentQuestion[1].name.common;
}

/**
 * Verify match after clicking on each answer item
 * @listens click
 * Displays different alert depending of the match
 */
function verifyMatchFlag() {
    countryAnswers.forEach(answer => { 
        answer.addEventListener("click", e => {
            let clickedAnswer = e.target;
            let match = clickedAnswer.innerText.toLowerCase() == MatchCountry.name.common.toLowerCase(); 
            if(match){ 
                Swal.fire(whichAlert(true, MatchCountry.name.common)).then((result) => {
                    if (result.dismiss) {
                        score++;
                        pushCurrentQuestion(shuffleData(countryData));
                    }
                });  
                        } else Swal.fire(whichAlert(false, MatchCountry.name.common)).then((result) => {
                    if (result.dismiss) {
                        pushCurrentQuestion(shuffleData(countryData));
                    }
                });  ;
          });
        })
    }

    /*
=================================
            MODE: BY COUNTRY
=================================
*/
/**
 * Display country name from the MatchCountry variable under the match by country mode
 */
function displayingCountryName() {
    countryName.innerHTML = MatchCountry.name.common;
}

/**
 * Assign a flag from the current question array to a random answer item
 */
function displayingFlags() {
    mixItems(flagChoices)
    flagChoices[0].innerHTML = `<img src="${currentQuestion[3].flags.png}" alt="${currentQuestion[3].name.common}" width=200 height=120>`;
    flagChoices[1].innerHTML = `<img src="${currentQuestion[2].flags.png}" alt="${currentQuestion[2].name.common}" width=200 height=120>`;
    flagChoices[2].innerHTML = `<img src="${currentQuestion[0].flags.png}" alt="${currentQuestion[0].name.common}" width=200 height=120>`;
    flagChoices[3].innerHTML = `<img src="${currentQuestion[1].flags.png}" alt="${currentQuestion[1].name.common}" width=200 height=120>`;
}

/**
 * Verify match after clicking on each answer item
 * @listens click
 * Displays different alert depending of the match
 */
function verifyMatchCountry() {
    flagChoices.forEach(answer => { 
        answer.addEventListener("click", e => {
            let clickedAnswer = e.target;
            let match = clickedAnswer.src.slice(25, 27) == MatchCountry.cca2.toLowerCase(); 
            if(match){ 
                Swal.fire(whichAlert(true, MatchCountry.name.common)).then((result) => {
                    if (result.dismiss) {
                        score++;
                        pushCurrentQuestion(shuffleData(countryData));
                    }
                });  
                        } else Swal.fire(whichAlert(false, clickedAnswer.alt)).then((result) => {
                    if (result.dismiss) {
                        pushCurrentQuestion(shuffleData(countryData));
                    }
                });  ;
          });
        })
    }

/**
 * Create a default alert object which can be used to fire customised alerts called when match verified
 * @param match {boolean}
 * @param {string} Name of country to match
 */
function whichAlert(match, country) {
    const defaultAlert = {

        position:'center',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,        
    };
    if(match) {
        defaultAlert.title = "Yaaayy doing amazing! Keep going...";
        defaultAlert.icon = "success";
        defaultAlert.timer= 2000;
    } else {
        defaultAlert.title = `Ooooops...it is ${country.toUpperCase()}.`;
        defaultAlert.icon = "error";
        defaultAlert.timer= 3000;
    }
    return defaultAlert;
}

/**
 * Add content on game-over container depending of score
 */
function showGameOver(){
    finalScore.innerText = score;
    if(score<=10){
        scoreComment.innerHTML = `
        <h1>Got there!...definitely can do better!<h2>
        <p>Dare to try again and improve this score?<p>`
    } else if(score>10 && score<15){
        scoreComment.innerHTML = `
        <h1>WOW very impressive!<h2>
        <p>With more practice, you can beat this great score!<p>`
    } 
    else if(score<20 && score>=15){
        scoreComment.innerHTML = `
        <h1>Bravooooo you are super smart!<h2>
        <p>Reach the 20/20 or wait for the extreme mode to be built...?<p>`
    } else {
        scoreComment.innerHTML = `
        <h1>Amazing you beat the game!<h2>
        <p>Now I really have to build the extreme mode asap...<p>`
    }
}
// setting variables for the whole game
const url = 'https://restcountries.eu/rest/v2/all';
const homeContainer = document.getElementById("home-container");
const gameContainer = document.getElementById("game-container");
const startFlag = document.getElementById("flag-button");
const startCountry = document.getElementById("country-button");
const flag = document.querySelector("#flag img");
const answerItem = document.getElementsByClassName("answer-item");
const answers = Array.from(document.getElementsByClassName("answer-item"));
let number;
let countryArray; //contains fetched data
let currentQuestion = [];
let MatchCountry;
let filteredQuestion;
let filteredAnswers;

let acceptingAnswers= true;
let score = 0;
let questionCount = 0;

// add events listeners
startFlag.addEventListener("click", function(event){
    if (homeContainer.style.display !== "block"){
        homeContainer.classList.add("d-none");
        gameContainer.classList.remove("d-none");
    }
})

//fetching rest country API
function fetchApi () {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        countryArray = data; //defining countryArray variable to the fetched data
        
    shuffleData (countryArray);
    pullCurrentQuestion (countryArray);
        })
    
    .catch(err => console.log(err))

}

/* function retrieves a random number with Math.random() and through array.sort, it compares two items and sorts their index depending on the result being positive negative or 0. */
function shuffleData (countryArray) {
    return countryArray.sort(() => Math.random() - 0.5);   /*while sorting the array and comparing its items, applying function to return a floating-point, pseudo-random number in the range of 0 and 1: The sole determinant of whether the elements are swapped or not is the return value of the compare function.*/
}

/* function to mix the html answers items which I have created an array from */
function mixAnswersItem (answers) {
    number = Math.floor(Math.random() * answers.length); /* Math.floor() function returns the largest integer less than or equal to a floating-point, pseudo-random number in the range of array length */
}

/* function to pull question which is an array of the first 4 countries after original arraw was shuffled */
function pullCurrentQuestion (countryArray) {
    currentQuestion.push(...countryArray.slice(0,4));
    
    selectingCountrytoMatch(currentQuestion); /* calling function to select country to match from the current question */
    
}

/* function to select randomly country to match from the current question array */
function selectingCountrytoMatch(currentQuestion) {
    let countryIndex = Math.floor(Math.random() * currentQuestion.length); /* defining a random index to each country in the array */
    MatchCountry = currentQuestion[countryIndex]; /* defining an empty variable to a random index of current question array */
/* calling here functions to make the game displayed and after being clicked match verified */
    displayingFlag()
    displayingCountriesName()
    verifyMatch();
}

/* function to display flag from the MatchCountry variable */
function displayingFlag() {
    flag.src = MatchCountry.flag;
}

/* function to assign a random country name from the current question array to a different answer item */
function displayingCountriesName() {
    mixAnswersItem (answers)
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
            console.log(match) 

            if(match == true){ /* if match variable is true, alert is displayed */
                Swal.fire('Well done!');
            }
          });
        })
}

fetchApi();
// setting variables for the whole game
const url = 'https://restcountries.eu/rest/v2/all';
const startFlag = document.getElementById("flag-button");
const startCountry = document.getElementById("country-button");
const flag = document.querySelector("#flag img");
const answers = Array.from(document.getElementsByClassName("answer-item"));
let number;
let countryArray; //contains fetched data
let currentQuestion = [];
let MatchCountry;

let acceptingAnswers= true;
let score = 0;
let questionCount = 0;


// add events listeners
startFlag.addEventListener("click", function(event){
    document.getElementById("home-container").style.display("none");
    document.getElementById("game-container").style.display("block");
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

function shuffleData (countryArray) {
    return countryArray.sort(() => Math.random() - 0.5);   
}

function shuffleAnswersItem (answers) {
    answers.forEach(answer => {
      number = Math.floor(Math.random() * answers.length);
    });
}

function pullCurrentQuestion (countryArray) {
    for (let i = 0;; i++) {
        if (i > 3) break;
        currentQuestion.push(countryArray[i]);
    }
    CountrytoMatch (currentQuestion);
    otherCountries (currentQuestion)
}
/* assigning indexes, numbers to each country for the current question (https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript) */ 
function CountrytoMatch (currentQuestion) {
    let countryIndex = Math.floor(Math.random() * currentQuestion.length);
    MatchCountry = currentQuestion[countryIndex];
    flag.src = MatchCountry.flag;
    shuffleAnswersItem (answers)
    answers[number].innerText = MatchCountry.name;
    currentQuestion.splice(countryIndex, 1)
    answers.splice(number, 1);
}

function otherCountries (currentQuestion) {
    answers[0].innerText = currentQuestion[0].name;
    answers[1].innerText = currentQuestion[1].name;
    answers[2].innerText = currentQuestion[2].name;
}

fetchApi ();
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

function shuffleData (countryArray) {
    return countryArray.sort(() => Math.random() - 0.5);   
}

function mixAnswersItem (answers) {
    answers.forEach(answer => {
      number = answer.dataset["number"];//Math.floor(Math.random() * answers.length);
    });
}

function pullCurrentQuestion (countryArray) {
    for (let i = 0;; i++) {
        if (i > 3) break;
        currentQuestion.push(countryArray[i]);
    }
    countrytoMatch (currentQuestion);
    otherCountries (filteredQuestion);
    matchingCountry();
}
/* assigning indexes, numbers to each country for the current question (https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript) */ 
function countrytoMatch (currentQuestion) {
    let countryIndex = Math.floor(Math.random() * currentQuestion.length);
    MatchCountry = currentQuestion[countryIndex];
    flag.src = MatchCountry.flag;
    answers.forEach(answer => {
      number = answer.dataset["number"];
      answer.innerText = currentQuestion[countryIndex].name;
    });
    
    
    filteredQuestion = currentQuestion.filter(countries => countries.name !== MatchCountry.name)
    console.log(MatchCountry);
    console.log(filteredQuestion)
    console.log(countryIndex)

}

function otherCountries (filteredQuestion) {
    answers[0].innerText = filteredQuestion[0].name;
    answers[1].innerText = filteredQuestion[1].name;
    answers[2].innerText = filteredQuestion[2].name;
}

function matchingCountry () {
    answers.forEach(answer => {
        answer.addEventListener("click", e => {
            let clickedAnswer = e.target;
            let match = clickedAnswer.innerText.toLowerCase() == MatchCountry.name.toLowerCase();
            console.log(match)
            if(match == true){
                window.alert('Well done!');
            }
            

});
})
}

fetchApi();
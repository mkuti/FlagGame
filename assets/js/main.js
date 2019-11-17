// setting variables for the whole game
const url = 'https://restcountries.eu/rest/v2/all';
const countriesData = document.getElementById("countriesData");
const flag = document.querySelector("#flag img");
const answers = Array.from(document.getElementsByClassName("answer-item"));
let number;
let countryArray; //contains fetched data
let acceptingAnswers= true;
let score = 0;
let questionCount = 0;
let currentQuestion = [];
let MatchCountry;

// add events listeners



//fetching rest country API


function fetchApi () {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        countryArray = data; //defining countryArray variable to the fetched data
        /*let options = ""; //setting an empty string which we will assign one country to be displayed at a time
        countryArray.forEach(item => options += `<option value="${item.alpha2Code}">${item.name}</option>`)
        countriesData.innerHTML = options; //adding country list as dropdown menu to a hidden container from which we'll pull randomly data
        countriesData.selectedIndex = Math.floor(Math.random() * countryArray.length); //using index from dropdown menu to pull random numbers which we will then assign to question function so we get one country data randomly for each question
        
        

        displayRandomQuestion(countriesData[countriesData.selectedIndex].value); //assigning parameters to question function: random index to which we check its value/country code
    */
    shuffleData (countryArray);
    pullCurrentQuestion (countryArray);
    console.log(currentQuestion)
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

/*function displayRandomQuestion(countryByCode) { //defining the random question function
    score = 0; //reset score after player finishes first round
    questionCount = 0; //reset number of questions being displayed after player finishes first round

    let answersAmount = 4;
    //let randomQuestion = 
    let countryData = countryArray.find(country => country.alpha2Code == countryByCode); // to define a variable to a country which match the function argument which is the country code so we can apply data to it
    flag.src = countryData.flag; // assigning a random flag to the source of img inside flag ID
        
    let whereCorrectAnswer = Math.floor(Math.random() * answersAmount + 1)
    
    answers.forEach(answer => {
        const number = answer.dataset['number'];
        console.log(answers[number]);
        //if(whereCorrectAnswer == number){
        //number.innertet += countryData.name;
    
    });
    
    let incorrectAnswers = countryArray.filter(country => country.alpha2Code !== countryByCode); // to define a variable for all the other countries not matching the random number
    
}*/

/*function yodaShuffle(giveMeAnArray) {
  return giveMeAnArray.sort(() => Math.random() - 0.5);
}
yodaShuffle([1,2,3,4,5,6,7,8,9,10])*/
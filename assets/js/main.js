// setting variables for the whole game
const url = 'https://restcountries.eu/rest/v2/all';
const countriesData = document.getElementById("countriesData");
const flag = document.querySelector("#flag img");
const answers = Array.from(document.getElementsByClassName("answer-item"));

let countryArray; //contains fetched data
let acceptingAnswers= true;
let score = 0;
let questionCount = 0;

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
    pullCurrentQuestion (countryArray)
    })
    
    .catch(err => console.log(err))

}

function shuffleData (countryArray) {
    return countryArray.sort(() => Math.random() - 0.5);   
}

function pullCurrentQuestion (countryArray) {
    let currentQuestion = [];
    for (let i = 0;; i++) {
        if (i > 3) break;
        currentQuestion.push(countryArray[i])
    }
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
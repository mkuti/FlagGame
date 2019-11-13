// setting variables for the whole game

const countriesData = document.getElementById("countriesData");
const flag = document.querySelector("#flag img");

let countryArray; //contains fetched data

let answers = Array.from(document.getElementsByClassName("answer-item"));

let flagNow = {};
let acceptingAnswers= true;
let availableQuestions = [];

console.log(countriesData);

// creating array of 50 objects which represent each challenge
//within each object, will fetch a flag and offer 4 choices of country
//question.json created to hold the questions

//fetching rest country API
const url = 'https://restcountries.eu/rest/v2/all';

fetch(url)
    .then(response => response.json())
    .then(data => {
        countryArray = data; //defining countryArray variable to the fetched data
        let options = ""; //setting an empty string which we will assign one country to be displayed at a time
        countryArray.forEach(item => options += `<option value="${item.alpha2Code}">${item.name}</option>`)
        countriesData.innerHTML = options; //adding country list as dropdown menu to a hidden container from which we'll pull randomly data
        countriesData.selectedIndex = Math.floor(Math.random() * countryArray.length); //using index from dropdown menu to pull random numbers which we will then assign to question function so we get one country data randomly for each question
        displayRandomQuestion(countriesData[countriesData.selectedIndex].value); //assigning parameters to question function: random index to which we check its value/country code
    })
    .catch(err => console.log(err))
    

function displayRandomQuestion(countryByCode) { //defining the random question function
    let countryData = countryArray.find(country => country.alpha2Code == countryByCode); // to define a variable to a country which match the function argument which is the country code so we can apply data to it
    flag.src = countryData.flag;
}


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
        countryArray = data;
        let options = "";
        countryArray.forEach(item => {
           options += `<option value="${item.alpha2Code}">${item.name}</option>`;
        })
        countriesData.innerHTML = options;
        displayRandomQuestion("FR");
    })
    .catch(err => console.log(err))
    

function displayRandomQuestion(countryByCode) {
    let countryData = countryArray.find(country => country.alpha2Code == countryByCode);
    console.log(countryData);
}


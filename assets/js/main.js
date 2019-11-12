// setting variables for the whole game

let flag = document.getElementById("flag");
let answers = Array.from(document.getElementsByClassName("answer-item"));

let flagNow = {};
let acceptingAnswers= true;
let availableQuestions = [];

// creating array of 50 objects which represent each challenge
//within each object, will fetch a flag and offer 4 choices of country
//question.json created to hold the questions

//fetching rest country API
const url = 'https://restcountries.eu/rest/v2/all';

fetch(url)
    .then(response => response.json())
    .then(data => {
        let countryArray = data;
        countryArray.forEach(item => {
           flag.innerHTML = item.flag;
        })
    })
    .catch(err => console.log(err))
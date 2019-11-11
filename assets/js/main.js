// setting variables for the whole game

let flag = document.getElementById("#flag");
let answers = Array.from(document.getElementsByClassName("answer-item"));

let flagNow = {};
let acceptingAnswers= true;
let availableQuestions = [];

// creating array of 50 objects which represent each challenge
//within each object, will fetch a flag and offer 4 choices of country


//fetching rest country API
const url = 'https://restcountries.eu/rest/v2/all';

console.log(answers);

function returnData (url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log(item.flag)
        })
    })
    .catch(err => console.log(err))
};

returnData(url);
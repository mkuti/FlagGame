let flag = document.querySelector("#flag");
let answerA = document.querySelector("answerA");
let answerB = document.querySelector("answerB");
let answerC = document.querySelector("answerC");
let answerD = document.querySelector("answerD");

const url = 'https://restcountries.eu/rest/v2/all';

console.log(flag);

function returnData (url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

returnData(url);


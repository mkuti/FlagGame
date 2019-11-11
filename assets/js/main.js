let flag = document.querySelector("#flag");
let answers = Array.from(document.getElementsByClassName("answer-item"));

const url = 'https://restcountries.eu/rest/v2/all';

console.log(answers);

function returnData (url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

returnData(url);


const url = 'https://raw.githubusercontent.com/sindresorhus/superheroes/master/superheroes.json';

function returnData (url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

returnData(url);
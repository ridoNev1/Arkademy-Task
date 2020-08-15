const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((json) => {
        json.map(e => console.log(e.name));
    }).catch((err) => {
        console.log(`${err}`);
    })


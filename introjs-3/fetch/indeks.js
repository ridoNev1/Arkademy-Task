const express = require('express')
const app = express()
const fetch = require('node-fetch')
const port = 3001
const url = 'https://jsonplaceholder.typicode.com/users';

app.get('/', (request, response) => {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            response.send(result.map(e => e.name));    
        });
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})

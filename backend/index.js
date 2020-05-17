const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Backend iniciado!');
});

app.get('/', (request, response) => {
    return response.json({ message: 'HIiiiiii' });
});
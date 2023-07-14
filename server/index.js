const express = require('express');

const app = new express();

app.get('/', (_req, res) => {

    res.send(
        `<h1>react is excellent</h1>`
    )

})

app.listen(7777);
console.info("server is listening")
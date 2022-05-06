require('dotenv').config();


const express = require('express');

const app = express();





//server listening...

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`server runs on port: ${PORT}😃`);
})
require('dotenv').config();


const express = require('express');

const app = express();

//middlewares....

app.use(express.json());

app.use(express.urlencoded({ extended: false }))





//router middleware...


app.use('/api/v1', require('./routes/workoutRoutes'))










//server listening...

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`server runs on port: ${PORT}😃`);
})
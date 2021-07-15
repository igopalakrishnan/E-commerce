const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

//routes
const userRoutes = require('./routes/user');


//environmental variable
env.config();

//connect mongodb
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.r94d2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(() => {
        console.log('mongoDB connected......');
    })

//add middleware before the request
app.use(bodyParser());
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`This server is running on ${process.env.PORT}`);
})
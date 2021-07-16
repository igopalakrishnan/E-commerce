const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');


//environmental variable
env.config();

//connect mongodb
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.r94d2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    ).then(() => {
        console.log('mongoDB connected......');
    })

//add middleware before the request
app.use(bodyParser());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`This server is running on ${process.env.PORT}`);
})
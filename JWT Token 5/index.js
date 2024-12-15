const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const router = require('./Router/UserRouter');
dotenv.config()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to MongoDB")
})

app.use('/api/v1/user', router)


app.listen(process.env.PORT, ()=>{
    console.log(`Server start the ${process.env.PORT}`);
})
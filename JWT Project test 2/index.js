const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { route } = require('./router/userRouter')
const app = express()

dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// mongoose.connect("mongodb+srv://suraj:mssuraj007@cluster0.hcrog6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
// {
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=> {
//     console.log("Connected to db");
// })
mongoose.connect("mongodb+srv://mssuraj:mssuraj007@cluster0.hcrog6q.mongodb.net/",
{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> {
    console.log("Connected to db");
})
app.post('/api/v1/users', route)



app.listen(5001, () => {
    console.log(`Server start for ${process.env.PORT}`);
})
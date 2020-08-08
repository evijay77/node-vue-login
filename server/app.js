const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");

const app = express()
const controller = require('./controller')
const routes = require("./routes");

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('Connected to MongoDB...');
});
app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(process.env.SERVER_PORT, () => console.log(`app listening at http://localhost:${process.env.SERVER_PORT}`))
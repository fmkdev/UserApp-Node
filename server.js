const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");

const connectDB = require('./server/database/db');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan('tiny'));

//connect database
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

app.get('/',(req, res) => {
    res.send("MY FIRST PROJECT");
})

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () =>{ console.log(`server is listening to port http://localhost:${PORT}`)})
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const router = require('./routes');




app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api', router)




module.exports = app;
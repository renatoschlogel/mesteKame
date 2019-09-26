 
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require('require-dir');

const app = express();
app.use(express.json()); // permite o envio de Json a API 
app.use(cors()); // acesso publico a API

mongoose.connect('mongodb://localhost:27017/mestrekame', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./models');

app.use('/mestrekame', require('./routes'));

app.listen(3001);
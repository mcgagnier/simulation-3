const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const session = require('express-session');
const controller = require('./controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use(session({
//     secret: 'ginger',
//     resave: false,
//     saveUninitialized: true;
// }))

const port = process.env.PORT || 4000;
app.listen(port, ()=>{console.log(`Tuned in to chanel ${port}`); } );
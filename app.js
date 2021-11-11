const express = require('express');
require('dotenv').config();



//create app
const app = express();
const port = process.env.PORT || 8000;
//set static folder
app.use(express.static('public'))

app.listen(port, ()=>console.log(`server run on port ${port}`))
const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const route = require('./routes/route')

//create app
const app = express();
const port = process.env.PORT || 8000;
//set static folder
app.use(express.static('public'))

//middlwares
//to cacth request body parameters 
app.use(express.json);


//route
app.get('/',(req,res)=>{
  return res.send("sas")
})

app.use('/api/v1', route)

app.listen(port, ()=>console.log(`server run on port ${port}...`))
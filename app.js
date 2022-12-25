const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/users.route');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use("/",router);

//route error;
app.use((req,res,next)=>{
    res.status(404).json({message : "route not found"});
});

//server error;
app.use((err,req,res,next)=>{
    res.status(500).json({message : "something broke"});
}); 

module.exports = app;
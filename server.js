require('./Model/db');

//start the express server
const express = require('express');
//request for todocontroller
const todoController = require('./controllers/todoController');
//request for handlebars
const path = require('path');
const exphbs = require('express-handlebars');

//request body-parser
const bodyparser = require('body-parser');


//call the express function using a variable app
var app = express();

app.use(bodyparser.urlencoded({
   extended:true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout: 'mainLayout',layoutsDir:__dirname + '/views/layouts/'
}));
app.set('view engine','hbs');

//now listen to the port
app.listen(3000,()=>{

    console.log('express server started at port 3000');
});

//using middle wear
app.use('/todo',todoController);
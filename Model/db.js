const  mongoose = require('mongoose');

//connection to mongodb
mongoose.connect('mongodb://localhost:27017/Tododb',{useNewUrlParser:true},(err) => {
    if(!err){console.log('Mongodb connection done')}
    else {console.log('Error in db Connection:' + err)}
});

//request statement for todolists in db.js

require('./todo.model');

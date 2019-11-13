const  mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//create an object of todolist schema
var todoSchema = new mongoose.Schema({    //constructor
    todoitem: String

},
    {
        versionKey:false
    }
);

// todoSchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });

todoSchema.set('toJSON', {
    virtuals: true
});



// register this schema to mongoose

mongoose.model('Todolist',todoSchema); //parameter:1 = name of schema ; parameter:2 schema object
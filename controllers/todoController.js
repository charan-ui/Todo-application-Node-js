//dealing with crud operations
const  express = require('express');

var router= express.Router();

const mongoose = require('mongoose');

const Todolist =mongoose.model('Todolist');


//creating a route
router.get('/',(req,res)=>{
res.render("todo/todoview",{
    viewTitle: 'Insert todo'
});

});

//handling both insert and update
router.post('/',(req,res)=>{
    if(req.body.id === '')
        InsertRecord(req,res);
    else
        updateRecord(req,res);
});

function InsertRecord(req,res)
{
    var todo = new Todolist();
    todo.todoitem = req.body.todoitem;
    todo.save((err,doc)=>{
        if(!err){
            res.redirect('todo/list');
        }else{

                  console.log("error during insertion"+ err);
          }
        });

}

//update query
function updateRecord(req,res)
{

   // console.log(req.body);
   // console.log(req.body._id);
  Todolist.findOneAndUpdate({_id:req.body._id},req.body,{new:true,upsert: true },(err,doc)=>{
      // console.log(doc);
       if(!err)
       {
           res.redirect('/todo/list')
       }
       else{
           console.log('error in update' + err);
       }
  });

}

router.get('/list',(req,res) => {

    Todolist.find((err,docs)=> {
       if(!err)
       {
           res.render("todo/list",{
               list:docs
           });

       }else{
           console.log("error while retriving todolists" +err);
       }

    });

});

router.get('/:id',(req,res) => {
    Todolist.findById(req.params.id, (err,doc) =>{
             if(!err){
                 res.render("todo/todoview",{
                     viewTitle:"update",
                     todo: doc
                 });
             }
        });
});

router.get('/delete/:id',(req,res)=>{
    Todolist.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err)
        {
            res.redirect('/todo/list');
        }else{
            console.log('error in delete:'+ err)
        }
    })
});




//export this router object
module.exports = router;


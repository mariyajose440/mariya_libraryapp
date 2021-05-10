const express = require("express");
var bookRouter=express.Router();
const bookdata=require('../model/bookdata');
function router(nav)
{
    // var book=[
    //     {title:'Tom and Jerry',author:'Joseph Barbera  ',gen:'Cartoon',img:"Tom-And-Jerry-Movie-Production-Start-Story-Details.jpg"},
    //     {title:'Harry Potter',author:'J K Rowling  ',gen:'Fantasy',img:'51mIn6jlDHL.jpg'},
    //     {title:'Pathummayude Aadu',author:'Vaikom Muhammad Basheer  ',gen:'Drama',img:'pathu.jpg'}
    // ];
    bookRouter.get('/',function(req,res)
    {
        bookdata.find()
        .then(function(book){
            res.render("books",{nav,title:'LIBRARY',book});
        }) 
    });
    bookRouter.get('/:id',function(req,res)
    {
        var id=req.params.id;
        bookdata.findOne({_id:id})
        .then(function (books){
            res.render("book012",{nav,title:"LIBRARY",books});
        })
        
    });
    return bookRouter;
}
   

module.exports=router;
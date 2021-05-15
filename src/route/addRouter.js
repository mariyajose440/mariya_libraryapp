const express=require("express");
const addRouter =express.Router();
var bodyParser = require('body-parser');
const bookdata=require('../model/bookdata');
const authdata=require('../model/authdata');
const { urlencoded } = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

function add(nav)
{
    addRouter.get('/',function(req,res)
    {
        res.render("add",{nav,title:"LIBRARY"});
    });
    addRouter.get('/addbook',function(req,res)
    {
        res.render("addbook",{nav,title:"LIBRARY"})
    });
    addRouter.get('/addauthor',function(req,res)
    {
        res.render("addauthor",{nav,title:"LIBRARY"})
    })
    addRouter.post('/addbook',urlencodedParser,function(req,res)
    {
        var ab=req.body;
        books=
            {title:ab.title,
            author:ab.author,
            gen:ab.gen,
            dis:ab.dis,
            img:ab.img};
        
        console.log(ab);
        var data=bookdata(books);
        data.save();
        res.redirect("/books");

    });
    addRouter.post('/addauthor',urlencodedParser,function(req,res)
    {
        var ab=req.body;
        ar=
            {title:ab.title,
            gen:ab.gen,
            dis:ab.dis,
            img:ab.img};
        
        console.log(ab);
        var data=authdata(ar);
        data.save();
        res.redirect('/authors');

    });
    addRouter.get('/update/:id',function(req,res)
    {
        var id=req.params.id;
        bookdata.findOne({_id:id})
        .then(function (books){
            res.render("update",{nav,title:"LIBRARY",books});
        })
    });
    addRouter.post('/update/:id',urlencodedParser,function(req,res)
    {
        var ab=req.body;
        ar=
            {title:ab.title,
            auth:ab.auth,
            gen:ab.gen,
            dis:ab.dis,
            img:ab.img};
            var id=req.params.id;
            console.log(id);
            bookdata.updateOne({_id:id},ar)
            // bookdata.findOne({_id:id})
            .then(function(){
                res.redirect('/books');
            })

    });
    addRouter.get('/delete/:id',function(req,res)
    {
        var id=req.params.id;
        bookdata.deleteOne({_id:id})
        .then(function(){
        res.redirect('/books');
        })
    });
    addRouter.get('/updates/:id',function(req,res)
    {
        var id=req.params.id;
        authdata.findOne({_id:id})
        .then(function (auth){
            res.render("updates",{nav,title:"LIBRARY",auth});
        })
    });
    addRouter.post('/updates/:id',urlencodedParser,function(req,res)
    {
        var ab=req.body;
        ar=
            {title:ab.title,
            gen:ab.gen,
            dis:ab.dis,
            img:ab.img};
            var id=req.params.id;
            console.log(id);
            authdata.updateOne({_id:id},ar)
            .then(function(){
                res.redirect('/authors');
            })

    });
    addRouter.get('/deletes/:id',function(req,res)
    {
        var id=req.params.id;
        authdata.deleteOne({_id:id})
        .then(function(){
        res.redirect('/authors');
        })
    });
    return addRouter;
    
    
}
module.exports=add;
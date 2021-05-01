const express=require("express");
const addRouter =express.Router();
var bodyParser = require('body-parser');
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
        res.render("book012",{nav,title:"LIBRARY",books});

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
        res.render("author012",{nav,title:"LIBRARY",ar});

    });
    return addRouter;
    
    
}
module.exports=add;
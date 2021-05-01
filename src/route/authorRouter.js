const express=require("express");
const authorRouter=express.Router();
function auth(nav)
{
    var author=[
        {title:"Arundhati Roy",gen:"Political activist",img:"a.jfif"},
        {title:"Kamala Surayya",gen:"Short Stories",img:"ka.jpg"},
        {title:"Chetan Bhagat",gen:"Novelist",img:"ca.jpg"}
    ];
    authorRouter.get('/',function(erq,res)
    {
        res.render("authors",{nav,title:"LIBRARY",author});
    });
    authorRouter.get("/:id",function(req,res)
    {
        var id=req.params.id;
        res.render("author012",{nav,title:"LIBRARY",ar:author[id]});
    })
    return authorRouter;
}
module.exports=auth;
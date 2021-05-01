const express = require("express");
const app =new express;
const port=process.env.PORT||5000;
var nav=[
    {link:'/books' , name:'BOOKS'},
    {link:'/authorS',name:'AUTHORS'},
    {link:'/add',name:'ADD'}

];
const bookRouter=require("./src/route/bookRouter")(nav);
const authorRouter=require("./src/route/authorRouter")(nav);
const addRouter=require("./src/route/addRouter")(nav);
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use("/add",addRouter);

var nav1=[
    {link:'/signup' , name:'SIGN_UP'},
    {link:'/login',name:'LOG_IN'}
];
app.get('/',function(req,res)
{
    res.render('mainindex',{nav1,title:'LIBRARY'});
});
app.get('/index',function(req,res)
{
    res.render('index',{nav,title:'LIBRARY'});
});
app.get('/signup',function(req,res)
{
    res.render('signup',{link:'/login',name:'LOG_IN',title:'LIBRARY'});
});
app.get('/login',function(req,res)
{
    res.render('login',{link:'/signup' , name:'SIGN_UP',title:'LIBRARY'});
});

 app.listen(port,()=>{console.log(port)});
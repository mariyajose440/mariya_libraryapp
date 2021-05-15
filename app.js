const { urlencoded } = require("express");
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
const updata=require("./src/model/update");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use("/add",addRouter);
app.use(express.urlencoded({extended:true}));

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
app.get('/log',function(req,res)
{
    res.render('log',{nav1,title:'LIBRARY'});
});
app.post('/sign',urlencodedParser,function(req,res)
{
    var ab=req.body;
        up=
            {
                name:ab.name,
                email:ab.email,
                phone:ab.phone,
                password:ab.password,
                repassword:ab.repassword
            };
        
        console.log(ab);
        var data=updata(up);
        data.save();
        res.redirect("/login");
})
app.get('/login',function(req,res)
{
    res.render('login',{link:'/signup' , name:'SIGN_UP',title:'LIBRARY'});
});
app.post('/login',urlencodedParser,function(req,res)
{
    var ab=req.body;
    ar=ab.email;
    arr=ab.password;
    updata.findOne({email:ar})
    .then(function(up)
    {
        console.log(up);
        if(up.password===arr)
        {
            res.redirect('/index');
        }
        else
        {
        res.redirect('/log');
        }
    })
    .catch(function(){
        res.redirect('/log');
    })
    
});
 app.listen(port,()=>{console.log(port)});
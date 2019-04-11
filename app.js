const express=require('express');
const port=3000;
const host='localhost';
// noinspection NodeJsCodingAssistanceForCoreModules
const http=require('http');
const mongoose =require('mongoose');
const morgan =require('morgan');
const bodyParser=require('body-parser');
var Blogs=require('./models/blogs');
var urlencodedparser =bodyParser.urlencoded({extended:true});
const url='mongodb://localhost:27017/bloging';

// const blogRouter=require('./routers/blogRouter');
mongoose.connect(url)
    .then(function(){
        console.log('connected successfully');
    },function(err){
        console.log(err);
    });

const app=express();
app.set('view engine','ejs');
app.use(morgan('dev'));
// app.use('/blogs',blogRouter);
app.get('/',function(req,res,next){
    Blogs.find({})
        .then(function(blogs){
             console.log('found everything',blogs);
            res.render('index',{ posts: blogs});
        },function(){console.log('error')});

});
app.post('/addPost',urlencodedparser,function(req,res,next){
    console.log('success');
    // console.log(req.body);
    Blogs.create(req.body)
        .then(function(blog){
            console.log('blog writte',blog.des);
            //enj


            res.redirect('/');
        },function(){console.log('error in posting')})
});




const server=http.createServer(app);
server.listen(port,host,function(){
    console.log(`server is created at http:/${host}:${port} `);
});
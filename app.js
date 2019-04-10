const express=require('express');
const port=3000;
const host='localhost';
// noinspection NodeJsCodingAssistanceForCoreModules
const http=require('http');
const mongoose =require('mongoose');
const morgan =require('morgan');
var Blogs=require('./models/blogs');
const url='mongodb://localhost:27017/bloging';
const blogRouter=require('./routers/blogRouter');
mongoose.connect(url)
    .then(function(){
        console.log('connected successfully');
    },function(err){
        console.log(err);
    });

const app=express();
app.set('view engine','ejs');
app.use(morgan('dev'));
app.use('/blogs',blogRouter);
// app.get('/',function(req,res,next){
//     res.render('index');
// });





const server=http.createServer(app);
server.listen(port,host,function(){
    console.log(`server is created at http:/${host}:${port} `);
});
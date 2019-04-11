const express=require('express');
const bodyParser=require('body-parser');

const blogRouter=express.Router();
blogRouter.use(bodyParser.json());
const mongoose=require('mongoose');
const Blogs=require('../models/blogs');


blogRouter.route('/')
    .get(function(req,res,next){
        Blogs.find({})
            .then(function(blogs){
                console.log('found everything');
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(blogs);
            },function(){console.log('error in finding')})
    })
.post(function(req,res,next){
    Blogs.create(req.body)
        .then(function(blog){
            console.log('blog written',blog);
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');

            res.redirect('/');
        },function(){console.log('error in posting')})
});
module.exports=blogRouter;
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const Schema=mongoose.Schema;

const blogSchema=new Schema({
    blog:{
        type:String,
        required:true
    },
        des:
            {
        type:String,
            required:true
        }

        },
    {
        timestamp:true
    }
    );


var Blogs = mongoose.model('blogs',blogSchema);
module.exports=Blogs;
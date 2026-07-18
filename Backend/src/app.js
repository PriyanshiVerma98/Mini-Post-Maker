const express=require('express');
const multer=require('multer');
const uploadFile=require('./services/storage.services.js')

const postModel=require('./models/post.model.js')
const cors=require('cors');


const app=express();


//middlewares
app.use(express.json());
app.use(cors());

const upload=multer({
    storage:multer.memoryStorage()
})




//apis
app.get('/feed',async (req,res)=>{

    const posts=await postModel.find();


    res.status(201).json({
    message:"Posts fetched successfully",
    posts
})
})

app.post('/createPost',upload.single("image"),async (req,res)=>{
   
 

    const result=await uploadFile(req.file.buffer)

    let post=await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })
res.status(201).json({
    message:"successfully added the post",
    post
})

    
   
})


module.exports=app;
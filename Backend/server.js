   


require('dotenv').config();

const app=require('./src/app.js')

const connectDB=require('./src/db/db.js');

const postModel=require('./src/models/post.model.js');

connectDB();







app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000")
})
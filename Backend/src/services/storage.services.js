require('dotenv').config()
const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.ImageKit_private_key
});


async function uploadFile(buffer){

    const result=await client.files.upload({
        file:buffer.toString('base64'),
    fileName:"image.jpg"

    })

    return result;
    
}

module.exports=uploadFile;
const cloudinary=require('cloudinary').v2;
const multer=require('multer');


cloudinary.config({
    cloud_name:"dfmdoyhsa",
    api_key:"992787283223831",
    api_secret:"Peqwtd3B_r-hZRSC_rn96m-BiEA",
})

const storage=new multer.memoryStorage();

async function imageUploadUtil(file){
    const result=await cloudinary.uploader.upload(file,{
        resource_type:"auto",
    })
    return result;
}

const upload=multer({storage});

module.exports = {upload ,imageUploadUtil}